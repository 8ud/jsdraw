import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geometrie',
  templateUrl: './geometrie.component.html',
  styleUrls: ['./geometrie.component.css']
})
export class GeometrieComponent implements OnInit {

   valX: number = 0;
   valY: number = 0;
   valHauteur: number = 0;
   valLargeur: number = 0;
   valRayon: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
