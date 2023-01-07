import { Shape } from "./shape";

export class Rectangle extends Shape{
     constructor(theX: number, theY: number, private _width: number, private _length: number){
        super(theX,theY);
    }
}