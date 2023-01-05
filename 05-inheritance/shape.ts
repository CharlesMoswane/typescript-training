export class Shape{
    private _x: number;
    public get x(): number{
        return this._x;
    }

    public set(value: number){
        this._x = value;
    }
}