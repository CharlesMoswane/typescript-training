import { Shape } from "./shape";

export class Circle extends Shape{
    private _radius: number;
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    constructor(theX: number, theY: number, )
}