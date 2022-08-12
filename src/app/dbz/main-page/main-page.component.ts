import { Component } from '@angular/core';
import {Personaje} from '../interfaces/dbz.interfaces';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {


  nuevo:Personaje={
    nombre:'',
    poder:0
  };
 
  personajes:Personaje[]=[
    {
      nombre:'Goku',
      poder:15000
    },
    {
      nombre:'Vegueta',
      poder:7500
    }
  ]
  agregarNuevoPersonaje(argumento:Personaje)
  {
    this.personajes.push(argumento);
    debugger;
    console.log('Main page Nuevo personaje');
    

  }

}
