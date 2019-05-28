import { Point } from './point';


export  abstract class Fg {

  constructor(protected innerAncrage: Point){}
  public abstract dessine(context: CanvasRenderingContext2D): void;

   public get ancrage() : Point {
      return this.innerAncrage
   }

}