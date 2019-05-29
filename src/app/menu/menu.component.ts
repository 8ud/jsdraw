import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanService } from '../plan.service';
import { Cercle } from '../cercle';
import { Point } from '../point';
import { Rectangle } from '../rectangle';
import { GeometrieComponent } from '../geometrie/geometrie.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   @ViewChild('geometrie') refGeometrie : GeometrieComponent;

   valSelect : string;

  constructor(public srvPlan: PlanService) { }

  ngOnInit() {
     this.valSelect = this.srvPlan.instancePlan.name;
  }

  pointX : number;
  pointY : number;
  Rayon : number;
  Haut : number;
  Larg : number;


  onAddCercle(){
   const cercleWrk = new Cercle(new Point(this.pointX,this.pointY) , this.Rayon);
// const cercleWrk = new Cercle(new Point(this.refGeometrie.valX, this.refGeometrie.valY), this.refGeometrie.valRayon);

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

  onSaveDessin(){
   this.srvPlan.saveDessin2LocalStorage();
  }

  onLoadDessin(){
   this.srvPlan.loadDessinFromLocalStorage();
  }

  onDeleteDessin(){
   this.srvPlan.DeleteDessinFromLocalStorage();
  }

  onLstChange(){
     console.log(this.valSelect);
     this.srvPlan.instancePlan.name = this.valSelect;
     this.srvPlan.loadDessinFromLocalStorage();
  }


}
