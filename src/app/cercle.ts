import { Fg } from './fg';
import { Point } from './point';

export class Cercle extends Fg {

   constructor(point: Point , private rayon : number){
      super(point); //appel constructeur classe mère
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
      context.arc(this.ancrage.x , this.ancrage.y , this.rayon , 0 , 2*Math.PI);
      context.stroke();


      }




}
