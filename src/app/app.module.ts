import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDrawComponent } from './test-draw/test-draw.component';
import { DrawComponent } from './draw/draw.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GeometrieComponent } from './geometrie/geometrie.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDrawComponent,
    DrawComponent,
    MenuComponent,
    GeometrieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
