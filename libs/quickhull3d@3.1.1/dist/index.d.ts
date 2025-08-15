import { QuickHull, QuickHullOptions } from './QuickHull';
import { Face, Vec3Like } from './types';
export type Point = Vec3Like;
export { Vec3Like, Face, QuickHullOptions, QuickHull };
export default function runner(points: Array<Vec3Like>, options?: QuickHullOptions): Face[];
/**
 * Checks if a point is inside the convex hull.
 *
 * @param {Point} point - The point to check.
 * @param {Array<Point>} points - The points used in the space where the
 * convex hull is defined.
 * @param {Array<Face>} faces - The faces of the convex hull.
 */
export declare function isPointInsideHull(point: Vec3Like, points: Array<Vec3Like>, faces: Array<Face>): boolean;
