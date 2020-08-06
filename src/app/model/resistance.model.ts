export class Resistance {
    type: string;
    value: string;
    
    constructor(resistance: object) {
        Object.assign(this, resistance);
        return this;
    }
}