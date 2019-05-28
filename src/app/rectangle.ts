import { Fg } from './fg';
import { Point } from './point';

export class Rectangle extends Fg {
   
   constructor(point: Point , private hauteur : number, private largeur : number){
      super(point); //appel constructeur classe mère
   }

   public get haut() : number {

      return this.hauteur

   }

   public set haut(v : number) {

      this.hauteur = v;

   }

   public get larg() : number {

      return this.largeur

   }


   public set larg(v : number) {

      this.largeur = v;

   }

   public dessine(context: CanvasRenderingContext2D): void {
      console.log(`Rectangle X : ${this.ancrage.x} Y : ${this.ancrage.y } H: ${this.haut} L : ${this.larg}`);
      context.strokeRect(this.ancrage.x , this.ancrage.y , this.hauteur , this.largeur);

   }


}
