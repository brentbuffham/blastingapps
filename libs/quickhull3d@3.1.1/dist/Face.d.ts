import { Vec3Like } from './types';
import { HalfEdge } from './HalfEdge';
import { Vertex } from './Vertex';
export declare enum Mark {
    Visible = 0,
    NonConvex = 1,
    Deleted = 2
}
export declare class Face {
    normal: Vec3Like;
    centroid: Vec3Like;
    offset: number;
    outside: Vertex;
    mark: Mark;
    edge: HalfEdge;
    nVertices: number;
    area: number;
    constructor();
    getEdge(i: number): HalfEdge;
    computeNormal(): void;
    computeNormalMinArea(minArea: number): void;
    computeCentroid(): void;
    computeNormalAndCentroid(minArea?: number): void;
    distanceToPlane(point: Vec3Like): number;
    /**
     * @private
     *
     * Connects two edges assuming that prev.head().point === next.tail().point
     *
     * @param {HalfEdge} prev
     * @param {HalfEdge} next
     */
    connectHalfEdges(prev: HalfEdge, next: HalfEdge): Face;
    mergeAdjacentFaces(adjacentEdge: HalfEdge, discardedFaces: Array<Face>): Face[];
    collectIndices(): number[];
    static fromVertices(vertices: Vertex[], minArea?: number): Face;
    static createTriangle(v0: Vertex, v1: Vertex, v2: Vertex, minArea?: number): Face;
}
