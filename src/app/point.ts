export class Point {
  

   public get x() : number {
      return this.innerX;
   }

   public get y() : number {
      return this.innerY;
   }

   public set x(v: number){
      this.innerX = v;
   }

   public set y(v: number){
     this.innerY = v;
   }
   
   constructor(private innerX : number,private innerY : number){}







}
