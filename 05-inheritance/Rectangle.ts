import { Shape } from "./shape";

export class Rectangle extends Shape{
    constructor(theX: number, theY: number,
                private _breadth: number,private _width: number ){
        super(theX,theY);
    }

    public get breadth(): number {
        return this._breadth;
    }
    public set breadth(value: number) {
        this._breadth = value;
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
}