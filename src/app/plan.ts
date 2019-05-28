import { Fg } from './fg';

export class Plan {

   private tabFG: Fg[] = [];

   public addFg(fg: Fg) : void{
      this.tabFG.push(fg);
   }

   public display(context: CanvasRenderingContext2D): void{
      for (const fgTemp of this.tabFG){
         fgTemp.dessine(context);
      }
   }



}
