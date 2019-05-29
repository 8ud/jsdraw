import { Injectable } from '@angular/core';
import { Plan } from './plan';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

   instancePlan : Plan = new Plan();

   listeDesDessins: string[] = [];

   notificationRefresh : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
     this.refreshListeDesDessins();
   }

  refreshListeDesDessins(){
     if('catalogue' in localStorage){
        this.listeDesDessins = []; //tableau vide
        //chargement en memoire du catalogue
        const tab = JSON.parse(localStorage['catalogue']);
        for (const key in tab){
           this.listeDesDessins.push(key); //mise en place dans le tableau
        }
     }
  }

  public saveDessin2LocalStorage(){
     const str : string = this.instancePlan.save(); // recuperation du flux json
     //sauvegarde du flux json dans le localstorage
     localStorage[this.instancePlan.name] = str;
   //   localStorage.dessin = str;  // objet.propriété
   // mise a jour du catalogue de dessins
   if (!('catalogue' in localStorage)){
      //creation d'un tableau dans le localstorage
      localStorage['catalogue'] = JSON.stringify({});
   }

   const catalogue: any = JSON.parse(localStorage['catalogue']);

   if (!(this.instancePlan.name in catalogue)){
      catalogue[this.instancePlan.name] = {dateUpdate : new Date()}; // date de creation du dessin
   }else{
      catalogue[this.instancePlan.name].data = new Date(); //date d'update du dessin
   }

   localStorage['catalogue'] = JSON.stringify(catalogue);  //sauvegarde du catalogue

   this.refreshListeDesDessins();

  }

  public loadDessinFromLocalStorage(){
     //test si dessin present dans le storage
     if (this.instancePlan.name in localStorage){

      //   const strRead : string = localStorage['dessin'];
        const strRead : string = localStorage[this.instancePlan.name];
        let objTemp: any;
        try{
            objTemp = JSON.parse(strRead);
            this.instancePlan.load(objTemp);
            // notification pour refresh
            this.notificationRefresh.next(true);
        }catch(ex){
           console.error(ex);
           return;
        }
     }
  }

  public DeleteDessinFromLocalStorage(){
     // appel plan
     this.instancePlan.clear();
     this.notificationRefresh.next(true);
  }

}
