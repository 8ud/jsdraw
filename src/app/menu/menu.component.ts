import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { Cercle } from '../cercle';
import { Point } from '../point';
import { Rectangle } from '../rectangle';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public srvPlan: PlanService) { }

  ngOnInit() {
  }

  pointX : number;
  pointY : number;
  Rayon : number;
  Haut : number;
  Larg : number;
  

  onAddCercle(){
   const cercleWrk = new Cercle(new Point(this.pointX,this.pointY) , this.Rayon);
   this.srvPlan.instancePlan.addFg(cercleWrk);
   //this.srvPlan.instancePlan.display(); //refresh
   this.srvPlan.notificationRefresh.next(true);
  }

  onAddRectangle(){
   const rectangleWrk =  new Rectangle(new Point(this.pointX,this.pointY) , this.Haut , this.Larg);
   this.srvPlan.instancePlan.addFg(rectangleWrk);
  // this.srvPlan.instancePlan.display(); //refresh
  this.srvPlan.notificationRefresh.next(true);
  }

}
