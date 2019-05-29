import { Fg } from './fg';
import { Point } from './point';

export class Cercle extends Fg {

   public static from(objLoad: any) : Fg{
      const ptr: Point = new Point(objLoad.innerAncrage.innerX, objLoad.innerAncrage.innerY);
      return new Cercle(ptr, objLoad.rayon);
   }

   constructor(point: Point , private rayon : number){
      super(point, "Cercle"); //appel constructeur classe mère
   }


   public get leRayon() : number {

      return this.rayon

      }
      

      public set leRayon(v : number) {

      this.rayon = v;

      }
      

      public dessine(context: CanvasRenderingContext2D): void {

      console.log(`Cercle X : ${this.ancrage.x} Y : ${this.ancrage.y} R: ${this.rayon}`);
      context.beginPath();
      context.strokeStyle = '#27ae60';
      context.arc(this.ancrage.x , this.ancrage.y , this.rayon , 0 , 2*Math.PI);
      context.stroke();


      }




}
