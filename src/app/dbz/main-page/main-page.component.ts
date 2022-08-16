import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {
get personajes(){
  return this.dbzService.personajes;
}

  nuevo:Personaje={
    nombre:'',
    poder:0
  };

  agregarNuevoPersonaje(argumento:Personaje)
  {
    this.personajes.push(argumento);
    console.log('Main page Nuevo personaje');
  }
constructor(private dbzService:DbzService){

}
}
