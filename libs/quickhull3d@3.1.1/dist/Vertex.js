export class Vertex {
    point;
    // index in the input array
    index;
    // next is a pointer to the next Vertex
    next;
    // prev is a pointer to the previous Vertex
    prev;
    // face is the face that's able to see this point
    face;
    constructor(point, index) {
        this.point = point;
        this.index = index;
        this.next = null;
        this.prev = null;
        this.face = null;
    }
}
//# sourceMappingURL=Vertex.js.map