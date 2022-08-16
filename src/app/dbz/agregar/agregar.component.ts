import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {

  constructor(private dbzService:DbzService){
   
  }


@Input() 
nuevo:Personaje={
  nombre:'',
  poder:0
};
// @Output() onNuevoPersonaje :EventEmitter<Personaje>= new EventEmitter();
 
agregar(){
  if (this.nuevo.nombre.trim().length===0) {
    return;
  }
  const item:Personaje=this.nuevo;
  // this.personajes.push(item);
// this.onNuevoPersonaje.emit(this.nuevo);
this.dbzService.agregarPersonaje(this.nuevo);
  console.log(this.nuevo);
  this.nuevo={
    nombre:'',
    poder:0
  };
}
}
