import { Fg } from './fg';
import { Point } from './point';

export class Rectangle extends Fg {

   public static from(objLoad: any) : Fg{
      const ptr: Point = new  Point(objLoad.innerAncrage.innerX, objLoad.innerAncrage.innerY);
      return new Rectangle(ptr, objLoad.hauteur, objLoad.largeur);
   }

   constructor(point: Point , private hauteur : number, private largeur : number){
      super(point , "Rectangle"); //appel constructeur classe mère
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
      context.fillStyle = '#27ae60';
      context.strokeRect(this.ancrage.x , this.ancrage.y , this.hauteur , this.largeur);

   }


}
