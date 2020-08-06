import { Card } from './card.model';

export class Cards {
    cards: Card[];

    constructor(input: object) {
        Object.assign(this, input);
        return this;
    }
}