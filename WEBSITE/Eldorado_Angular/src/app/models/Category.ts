export class Category {
    id!: number;
    name!: string;

    public constructor(init?: Category) {
        Object.assign(this, init);
    }
}
