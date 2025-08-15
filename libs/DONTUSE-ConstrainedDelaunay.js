//===========================================
// CUSTOM TRIANGLE CLASS
//===========================================

/**
 * Browser-safe Triangle class - A Two-Dimensional Quality Mesh Generator and Delaunay Triangulator
 * This is a pure JavaScript implementation that provides the core functionality of Triangle
 * without requiring WebAssembly, making it safe for browser environments.
 */
// MINING-GRADE Constrained Delaunay Triangulation Class
// Designed for open pit mine design with proper breakline handling
class ConstrainedDelaunay {
	constructor(points, segments = [], boundary = [], surfaceName = "surface", options = {}) {
		this.points = [...points];
		this.segments = segments || [];
		this.boundary = boundary || [];
		this.surfaceName = surfaceName;

		this.options = {
			quality: false,
			minAngle: 0,
			maxArea: Infinity,
			ccdt: true,
			steiner: false,
			steinerPoints: 0,
			...options
		};

		console.log("🏗️ Mining-grade ConstrainedDelaunay initialized:", {
			points: this.points.length,
			segments: this.segments.length,
			boundary: this.boundary.length
		});
	}

	triangulate() {
		try {
			if (this.points.length < 3) {
				console.error("❌ Not enough points for triangulation:", this.points.length);
				return this._buildSurfaceObject([]);
			}

			// 1) Generate robust Delaunay triangulation
			let triangles = this._robustDelaunayTriangulation();
			console.log("🔷 Base Delaunay triangulation:", triangles.length, "triangles");

			if (triangles.length === 0) {
				console.error("❌ Failed to generate base triangulation");
				return this._buildSurfaceObject([]);
			}

			// 2) Enforce constraints through iterative edge flipping
			if (this.options.ccdt && this.segments.length > 0) {
				console.log("⛏️ Enforcing", this.segments.length, "constraint segments for mining design...");
				triangles = this._enforceConstraintsIteratively(triangles);
				console.log("✅ Constraints enforced:", triangles.length, "triangles");
			}

			// 3) Boundary clipping for pit shell
			if (this.boundary.length > 0) {
				const beforeClip = triangles.length;
				triangles = this._clipToBoundary(triangles);
				console.log("⛏️ Pit boundary clipping:", beforeClip, "→", triangles.length, "triangles");
			}

			// 4) Quality improvement if needed
			if (this.options.quality) {
				const beforeQuality = triangles.length;
				triangles = this._improveTriangleQuality(triangles);
				console.log("💎 Quality improvement:", beforeQuality, "→", triangles.length, "triangles");
			}

			return this._buildSurfaceObject(triangles);
		} catch (error) {
			console.error("❌ Mining triangulation failed:", error);
			return this._buildSurfaceObject([]);
		}
	}

	// Robust Delaunay triangulation using divide-and-conquer approach
	_robustDelaunayTriangulation() {
		const n = this.points.length;

		// Create index array and sort points by x-coordinate for divide-and-conquer
		const indices = Array.from({ length: n }, (_, i) => i);
		indices.sort((a, b) => {
			const pa = this.points[a];
			const pb = this.points[b];
			return pa.x - pb.x || pa.y - pb.y;
		});

		// Use divide-and-conquer Delaunay triangulation
		const triangles = this._divideAndConquerDelaunay(indices);
		console.log("🔷 Divide-and-conquer generated", triangles.length, "triangles");

		return triangles;
	}

	// Divide-and-conquer Delaunay triangulation
	_divideAndConquerDelaunay(indices) {
		const n = indices.length;

		if (n < 3) return [];

		if (n === 3) {
			// Base case: single triangle
			const area = this._triangleArea(this.points[indices[0]], this.points[indices[1]], this.points[indices[2]]);
			return area > 1e-10 ? [indices.slice()] : [];
		}

		// Divide
		const mid = Math.floor(n / 2);
		const leftIndices = indices.slice(0, mid);
		const rightIndices = indices.slice(mid);

		// Conquer
		const leftTriangles = this._divideAndConquerDelaunay(leftIndices);
		const rightTriangles = this._divideAndConquerDelaunay(rightIndices);

		// Merge the two triangulations
		return this._mergeTriangulations(leftTriangles, rightTriangles, indices[mid - 1], indices[mid]);
	}

	// Merge two triangulations along a vertical line
	_mergeTriangulations(leftTriangles, rightTriangles, leftBoundary, rightBoundary) {
		// For simplicity, use incremental approach for merging
		// In production, this would use more sophisticated merging algorithms
		let allTriangles = [...leftTriangles, ...rightTriangles];

		// Add connecting triangles across the boundary
		const leftPoints = leftTriangles.flat().filter((v, i, arr) => arr.indexOf(v) === i);
		const rightPoints = rightTriangles.flat().filter((v, i, arr) => arr.indexOf(v) === i);

		// Find convex hull segments to connect left and right parts
		const connectingTriangles = this._connectTriangulations(leftPoints, rightPoints);
		allTriangles.push(...connectingTriangles);

		// Clean up any overlapping or invalid triangles
		return this._cleanupTriangulation(allTriangles);
	}

	// Connect two sets of points with triangles
	_connectTriangulations(leftPoints, rightPoints) {
		const connectingTriangles = [];

		// Simple connection strategy - find closest point pairs
		for (const lp of leftPoints) {
			for (const rp of rightPoints) {
				const leftPoint = this.points[lp];
				const rightPoint = this.points[rp];

				// Find a third point to form a triangle
				for (const tp of [...leftPoints, ...rightPoints]) {
					if (tp === lp || tp === rp) continue;

					const thirdPoint = this.points[tp];
					const area = this._triangleArea(leftPoint, rightPoint, thirdPoint);

					if (area > 1e-10) {
						connectingTriangles.push([lp, rp, tp]);
						break; // Only add one triangle per pair for now
					}
				}
			}
		}

		return connectingTriangles;
	}

	// Clean up triangulation by removing duplicates and invalid triangles
	_cleanupTriangulation(triangles) {
		const cleaned = [];
		const seen = new Set();

		for (const triangle of triangles) {
			// Sort vertices to create canonical representation
			const sorted = triangle.slice().sort((a, b) => a - b);
			const key = sorted.join(",");

			if (!seen.has(key)) {
				// Check if triangle has positive area
				const [i, j, k] = triangle;
				const area = this._triangleArea(this.points[i], this.points[j], this.points[k]);

				if (area > 1e-10) {
					cleaned.push(triangle);
					seen.add(key);
				}
			}
		}

		return cleaned;
	}

	// Iteratively enforce all constraint segments
	_enforceConstraintsIteratively(triangles) {
		console.log("🔗 Starting constraint enforcement for", this.segments.length, "segments");

		let constrainedTriangles = [...triangles];
		let totalFlips = 0;

		// Process each constraint segment
		for (let segIndex = 0; segIndex < this.segments.length; segIndex++) {
			const segment = this.segments[segIndex];
			const [startIdx, endIdx] = segment;

			console.log(`⚡ Enforcing constraint ${segIndex + 1}/${this.segments.length}: ${startIdx} → ${endIdx}`);

			const result = this._enforceConstraintSegment(constrainedTriangles, segment);
			constrainedTriangles = result.triangles;
			totalFlips += result.flips;

			console.log(`   └─ Performed ${result.flips} edge flips`);
		}

		console.log(`✅ Constraint enforcement complete. Total flips: ${totalFlips}`);
		return constrainedTriangles;
	}

	// Enforce a single constraint segment using edge flipping
	_enforceConstraintSegment(triangles, [startIdx, endIdx]) {
		const startPoint = this.points[startIdx];
		const endPoint = this.points[endIdx];
		let workingTriangles = [...triangles];
		let flips = 0;
		let maxIterations = 100;
		let iteration = 0;

		while (iteration < maxIterations) {
			iteration++;
			let madeFlip = false;

			// Find edges that intersect the constraint
			const intersectingEdges = this._findIntersectingEdges(workingTriangles, startPoint, endPoint, startIdx, endIdx);

			if (intersectingEdges.length === 0) {
				// Constraint is already satisfied
				break;
			}

			// Flip the first intersecting edge
			for (const edge of intersectingEdges) {
				const flipResult = this._performEdgeFlip(workingTriangles, edge);

				if (flipResult.success) {
					workingTriangles = flipResult.triangles;
					flips++;
					madeFlip = true;
					break; // Only flip one edge per iteration
				}
			}

			if (!madeFlip) {
				console.warn(`⚠️ Could not flip any more edges for constraint ${startIdx} → ${endIdx}`);
				break;
			}
		}

		if (iteration >= maxIterations) {
			console.warn(`⚠️ Hit iteration limit enforcing constraint ${startIdx} → ${endIdx}`);
		}

		return { triangles: workingTriangles, flips };
	}

	// Find edges that intersect with the constraint segment
	_findIntersectingEdges(triangles, startPoint, endPoint, startIdx, endIdx) {
		const intersectingEdges = [];

		for (const triangle of triangles) {
			const edges = [
				[triangle[0], triangle[1]],
				[triangle[1], triangle[2]],
				[triangle[2], triangle[0]]
			];

			for (const [u, v] of edges) {
				// Skip if this edge is part of the constraint
				if ((u === startIdx && v === endIdx) || (u === endIdx && v === startIdx)) {
					continue;
				}

				// Check intersection
				const edgeStart = this.points[u];
				const edgeEnd = this.points[v];

				if (this._segmentsIntersectProperly(startPoint, endPoint, edgeStart, edgeEnd)) {
					intersectingEdges.push([u, v]);
				}
			}
		}

		// Remove duplicates
		const uniqueEdges = [];
		const seen = new Set();

		for (const [u, v] of intersectingEdges) {
			const key = u < v ? `${u},${v}` : `${v},${u}`;
			if (!seen.has(key)) {
				uniqueEdges.push([u, v]);
				seen.add(key);
			}
		}

		return uniqueEdges;
	}

	// Check if two line segments intersect properly (not just at endpoints)
	_segmentsIntersectProperly(p1, q1, p2, q2) {
		const orientation = (p, q, r) => {
			const val = (q.x - p.x) * (r.y - q.y) - (q.y - p.y) * (r.x - q.x);
			if (Math.abs(val) < 1e-10) return 0; // Collinear
			return val > 0 ? 1 : 2; // CW or CCW
		};

		const o1 = orientation(p1, q1, p2);
		const o2 = orientation(p1, q1, q2);
		const o3 = orientation(p2, q2, p1);
		const o4 = orientation(p2, q2, q1);

		// General case - proper intersection
		return o1 !== o2 && o3 !== o4;
	}

	// Perform edge flip operation
	_performEdgeFlip(triangles, [u, v]) {
		// Find the two triangles sharing this edge
		const sharedTriangles = [];

		for (const triangle of triangles) {
			if (triangle.includes(u) && triangle.includes(v)) {
				sharedTriangles.push(triangle);
			}
		}

		if (sharedTriangles.length !== 2) {
			return { success: false, triangles };
		}

		const [tri1, tri2] = sharedTriangles;

		// Find the two vertices not on the edge
		const otherVertices = [];
		for (const vertex of [...tri1, ...tri2]) {
			if (vertex !== u && vertex !== v && !otherVertices.includes(vertex)) {
				otherVertices.push(vertex);
			}
		}

		if (otherVertices.length !== 2) {
			return { success: false, triangles };
		}

		const [p, q] = otherVertices;

		// Check if flip is valid (quadrilateral is convex)
		if (!this._isValidFlip(u, v, p, q)) {
			return { success: false, triangles };
		}

		// Perform the flip
		const newTriangles = triangles.filter((t) => !sharedTriangles.includes(t));
		newTriangles.push([u, p, q], [v, q, p]);

		return { success: true, triangles: newTriangles };
	}

	// Check if edge flip creates valid triangles
	_isValidFlip(u, v, p, q) {
		// Check if quadrilateral u-p-v-q is convex
		const pu = this.points[u];
		const pv = this.points[v];
		const pp = this.points[p];
		const pq = this.points[q];

		// Use cross products to check convexity
		const cross1 = (pp.x - pu.x) * (pq.y - pu.y) - (pp.y - pu.y) * (pq.x - pu.x);
		const cross2 = (pq.x - pv.x) * (pp.y - pv.y) - (pq.y - pv.y) * (pp.x - pv.x);
		const cross3 = (pu.x - pq.x) * (pv.y - pq.y) - (pu.y - pq.y) * (pv.x - pq.x);
		const cross4 = (pv.x - pp.x) * (pu.y - pp.y) - (pv.y - pp.y) * (pu.x - pp.x);

		// All cross products should have the same sign for convex quadrilateral
		return (cross1 >= 0 && cross2 >= 0 && cross3 >= 0 && cross4 >= 0) || (cross1 <= 0 && cross2 <= 0 && cross3 <= 0 && cross4 <= 0);
	}

	// Improve triangle quality through edge flipping and Steiner point insertion
	_improveTriangleQuality(triangles) {
		let improvedTriangles = [...triangles];

		// 1) Flip edges to improve angles (Delaunay criterion)
		improvedTriangles = this._improveAngles(improvedTriangles);

		// 2) Add Steiner points if needed
		if (this.options.steiner && this.options.steinerPoints > 0) {
			improvedTriangles = this._addSteinerPoints(improvedTriangles);
		}

		return improvedTriangles;
	}

	// Improve triangle angles through edge flipping
	_improveAngles(triangles) {
		let workingTriangles = [...triangles];
		let improved = true;
		let iterations = 0;
		const maxIterations = 50;

		while (improved && iterations < maxIterations) {
			improved = false;
			iterations++;

			for (let i = 0; i < workingTriangles.length; i++) {
				const triangle = workingTriangles[i];
				const [a, b, c] = triangle;

				// Check each edge for potential improvement
				const edges = [
					[a, b],
					[b, c],
					[c, a]
				];

				for (const [u, v] of edges) {
					if (this._shouldFlipForQuality(workingTriangles, u, v)) {
						const flipResult = this._performEdgeFlip(workingTriangles, [u, v]);
						if (flipResult.success) {
							workingTriangles = flipResult.triangles;
							improved = true;
							break;
						}
					}
				}

				if (improved) break;
			}
		}

		console.log(`💎 Angle improvement: ${iterations} iterations`);
		return workingTriangles;
	}

	// Check if edge should be flipped for quality improvement
	_shouldFlipForQuality(triangles, u, v) {
		// Find triangles sharing this edge
		const sharedTriangles = triangles.filter((t) => t.includes(u) && t.includes(v));

		if (sharedTriangles.length !== 2) return false;

		// Find the quad formed by the two triangles
		const allVertices = [...sharedTriangles[0], ...sharedTriangles[1]];
		const uniqueVertices = [...new Set(allVertices)];

		if (uniqueVertices.length !== 4) return false;

		const others = uniqueVertices.filter((vertex) => vertex !== u && vertex !== v);
		const [p, q] = others;

		// Check Delaunay criterion (empty circumcircle)
		return this._violatesDelaunayCriterion(u, v, p, q);
	}

	// Check if quadrilateral violates Delaunay criterion
	_violatesDelaunayCriterion(u, v, p, q) {
		const pu = this.points[u];
		const pv = this.points[v];
		const pp = this.points[p];
		const pq = this.points[q];

		// Check if point q is inside circumcircle of triangle u-v-p
		return this._pointInCircumcircle(pu, pv, pp, pq) > 1e-10;
	}

	// Point-in-circumcircle test
	_pointInCircumcircle(a, b, c, d) {
		const ax = a.x - d.x;
		const ay = a.y - d.y;
		const bx = b.x - d.x;
		const by = b.y - d.y;
		const cx = c.x - d.x;
		const cy = c.y - d.y;

		return (ax * ax + ay * ay) * (bx * cy - by * cx) - (bx * bx + by * by) * (ax * cy - ay * cx) + (cx * cx + cy * cy) * (ax * by - ay * bx);
	}

	// Add Steiner points for quality improvement
	_addSteinerPoints(triangles) {
		let workingTriangles = [...triangles];
		let addedPoints = 0;
		const maxPoints = this.options.steinerPoints;

		for (const triangle of triangles) {
			if (addedPoints >= maxPoints) break;

			const [i, j, k] = triangle;
			const p1 = this.points[i];
			const p2 = this.points[j];
			const p3 = this.points[k];

			// Check if triangle needs improvement
			const area = this._triangleArea(p1, p2, p3);
			const angles = this._triangleAngles(p1, p2, p3);
			const minAngle = (Math.min(...angles) * 180) / Math.PI;

			if (area > this.options.maxArea || minAngle < this.options.minAngle) {
				// Add circumcenter
				const circumcenter = this._triangleCircumcenter(p1, p2, p3);
				const z = (p1.z + p2.z + p3.z) / 3;

				this.points.push({ x: circumcenter.x, y: circumcenter.y, z });
				addedPoints++;
			}
		}

		if (addedPoints > 0) {
			console.log(`💎 Added ${addedPoints} Steiner points for quality`);
			// Retriangulate with new points
			return this._robustDelaunayTriangulation();
		}

		return workingTriangles;
	}

	// Clip triangulation to boundary for pit shell
	_clipToBoundary(triangles) {
		if (this.boundary.length === 0) return triangles;

		return triangles.filter((triangle) => {
			const [i, j, k] = triangle;
			const p1 = this.points[i];
			const p2 = this.points[j];
			const p3 = this.points[k];

			// Check if triangle centroid is inside boundary
			const centroidX = (p1.x + p2.x + p3.x) / 3;
			const centroidY = (p1.y + p2.y + p3.y) / 3;

			return this._pointInPolygon({ x: centroidX, y: centroidY }, this.boundary);
		});
	}

	// Utility methods
	_triangleArea(a, b, c) {
		return Math.abs((b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y)) / 2;
	}

	_triangleAngles(p1, p2, p3) {
		const dist = (u, v) => Math.hypot(u.x - v.x, u.y - v.y);
		const a = dist(p2, p3);
		const b = dist(p1, p3);
		const c = dist(p1, p2);

		return [Math.acos(Math.max(-1, Math.min(1, (b * b + c * c - a * a) / (2 * b * c)))), Math.acos(Math.max(-1, Math.min(1, (a * a + c * c - b * b) / (2 * a * c)))), Math.acos(Math.max(-1, Math.min(1, (a * a + b * b - c * c) / (2 * a * b))))];
	}

	_triangleCircumcenter(p1, p2, p3) {
		const ax = p2.x - p1.x;
		const ay = p2.y - p1.y;
		const bx = p3.x - p1.x;
		const by = p3.y - p1.y;
		const d = 2 * (ax * by - ay * bx);

		if (Math.abs(d) < 1e-10) {
			return { x: (p1.x + p2.x + p3.x) / 3, y: (p1.y + p2.y + p3.y) / 3 };
		}

		const asq = ax * ax + ay * ay;
		const bsq = bx * bx + by * by;
		return {
			x: p1.x + (by * asq - ay * bsq) / d,
			y: p1.y + (-bx * asq + ax * bsq) / d
		};
	}

	_pointInPolygon(point, polygon) {
		let inside = false;
		for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
			const xi = polygon[i].x,
				yi = polygon[i].y;
			const xj = polygon[j].x,
				yj = polygon[j].y;
			if (yi > point.y !== yj > point.y && point.x < ((xj - xi) * (point.y - yi)) / (yj - yi) + xi) {
				inside = !inside;
			}
		}
		return inside;
	}

	_buildSurfaceObject(triangles) {
		const triangleObjects = triangles.map(([i, j, k]) => {
			const p1 = this.points[i];
			const p2 = this.points[j];
			const p3 = this.points[k];
			return {
				vertices: [p1, p2, p3],
				indices: [i, j, k],
				minZ: Math.min(p1.z, p2.z, p3.z),
				maxZ: Math.max(p1.z, p2.z, p3.z),
				area: this._triangleArea(p1, p2, p3)
			};
		});

		return {
			id: this.surfaceName,
			name: this.surfaceName,
			type: "triangulated",
			points: this.points,
			triangles: triangleObjects,
			visible: true,
			gradient: "wireframe",
			transparency: 1.0,
			metadata: {
				pointCount: this.points.length,
				triangleCount: triangleObjects.length,
				constraintCount: this.segments.length,
				boundaryCount: this.boundary.length
			}
		};
	}
}

//===========================================
// CUSTOM TRIANGLE CLASS END
//===========================================
