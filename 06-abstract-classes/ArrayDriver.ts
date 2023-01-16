import { Circle } from "./Circle";
import { Shape } from "./shape";

let myShape = new Shape(10,15);
console.log(myShape.getInfo());

let myCircle = new Circle(5,10,20);
console.log(myShape.getInfo());