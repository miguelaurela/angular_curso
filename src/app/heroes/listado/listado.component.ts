import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  constructor() { }
 heroes:string[]=['Spiderman','Ironman','Hulk','Thor','Capital'];
 heroeBorrado:string='';
 borrarHeroe():void{
  // console.log('Borrando...');
  const heroe2:string=this.heroes.pop()||'';
  this.heroeBorrado=heroe2;
  
  // this.heroes.shift()

 }

}
