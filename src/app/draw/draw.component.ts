import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

   @Input() hauteurCanvas: number = 500;
   @Input() largeurCanvas: number = 500;

   @ViewChild('canvas') canvas:ElementRef;

  context: CanvasRenderingContext2D;


  constructor(public srvPlan : PlanService) { }

  ngOnInit() {
     this.srvPlan.notificationRefresh.subscribe ((val : boolean) => {
        if(val){
           this.draw(); //appel de methode refresh
        }
     });
  }

  ngAfterViewInit(): void {
   this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');

 }

 draw(){
   this.context.clearRect(0,0,this.largeurCanvas,this.hauteurCanvas);
   this.srvPlan.instancePlan.display(this.context); //appel affichage du plan
 }


}
