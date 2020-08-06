export class Card {
    id: string;
    name: string;
    type: Array<string>;
    imageUrl: string;

    constructor(card: object) {
        Object.assign(this, card);
        return this;
    }
}
