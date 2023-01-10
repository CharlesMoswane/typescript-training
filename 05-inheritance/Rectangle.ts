import { Shape } from "./shape";

export class Rectangle extends Shape{
    private _breadth: number;
    private _width: number;

    constructor(){
        super();
    }

    public get breadth(): number {
        return this._breadth;
    }
    public set breadth(value: number) {
        this._breadth = value;
    }
}