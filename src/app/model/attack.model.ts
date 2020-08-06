export class Attack {
    name: string;
    damage: string;
    cost: string;
    text: string;

    constructor(attack: object) {
        Object.assign(this, attack);
        return this;
    }
}
