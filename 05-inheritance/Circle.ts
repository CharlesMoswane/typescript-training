import { Shape } from "./shape";

export class Circle extends Shape{
    ;
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    constructor(theX: number, theY: number, private _radius: number){
        super(theX,theY);
    }
}