import { Vec3Like } from './types';
import { Face } from './Face';
export declare class Vertex {
    point: Vec3Like;
    index: number;
    next: Vertex | null;
    prev: Vertex | null;
    face: Face | null;
    constructor(point: Vec3Like, index: number);
}
