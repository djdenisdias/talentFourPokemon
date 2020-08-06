import { Attack } from './attack.model';
import { Resistance } from './resistance.model';
import { Weakness } from './weakness.model';

export class Detail {
    imageUrlHiRes: string;
    name: string;
    id: string;
    types: Array<string>;
    attacks: Array<Attack>;
    resistances: Array<Resistance>;
    weaknesses: Array<Weakness>;

    constructor(detail: object) {
        Object.assign(this, detail);
        return this;
    }
}
