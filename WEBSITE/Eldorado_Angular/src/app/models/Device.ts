export class Device {
    id!: number;
    category!: string;
    color!: string;
    partNumber!: number;

    public constructor(init?: Device) {
        Object.assign(this, init);
    }
}
