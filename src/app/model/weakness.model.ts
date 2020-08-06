export class Weakness {
    type: string;
    value: string;
    
    constructor(weakness: object) {
        Object.assign(this, weakness);
        return this;
    }
}