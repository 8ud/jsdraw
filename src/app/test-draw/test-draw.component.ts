import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan';
import { Cercle } from '../cercle';
import { Point } from '../point';
import { Rectangle } from '../rectangle';

@Component({
  selector: 'app-test-draw',
  templateUrl: './test-draw.component.html',
  styleUrls: ['./test-draw.component.css']
})
export class TestDrawComponent implements OnInit {

   lePlan : Plan = new Plan();

  constructor() { }

  ngOnInit() {
  }

 /*  onAddCercle(){
   const cercleWrk = new Cercle(new Point(10,20) , 100);
   this.lePlan.addFg(cercleWrk);
   this.lePlan.display(); //refresh
  } */

  /* onAddRectangle(){
   const rectangleWrk =  new Rectangle(new Point(30,40) , 200 , 300);
   this.lePlan.addFg(rectangleWrk);
   this.lePlan.display();
  } */

  
}
