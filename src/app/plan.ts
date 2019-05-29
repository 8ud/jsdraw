import { Fg } from './fg';
import { Cercle } from './cercle';
import { Rectangle } from './rectangle';

export class Plan {

   name: string = 'dessin';

   private tabFG: Fg[] = [];

   public addFg(fg: Fg) : void{
      this.tabFG.push(fg);
   }

   public display(context: CanvasRenderingContext2D): void{
      for (const fgTemp of this.tabFG){
         fgTemp.dessine(context);
      }
   }

   public save() : string{
      return JSON.stringify(this.tabFG);
   }

   public load(tab: any[]){
      this.tabFG = [];
      for (const obj of tab) {
         if (obj.typeName === 'Cercle'){
            this.tabFG.push(Cercle.from(obj));
            continue;
         }
         if (obj.typeName === 'Rectangle'){
            this.tabFG.push(Rectangle.from(obj));
            continue;
         }
      }

   }

   public clear(){
      this.tabFG =[];
   }



}
