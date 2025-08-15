import { Face } from './Face';
import { Vertex } from './Vertex';
export declare class HalfEdge {
    vertex: Vertex;
    face: Face;
    next: HalfEdge | null;
    prev: HalfEdge | null;
    opposite: HalfEdge | null;
    constructor(vertex: Vertex, face: Face);
    head(): Vertex;
    tail(): Vertex;
    length(): any;
    lengthSquared(): any;
    setOpposite(edge: HalfEdge): void;
}
