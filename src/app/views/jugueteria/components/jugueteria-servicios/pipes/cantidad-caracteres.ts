import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cantidadCaracteres'
})
export class cantidadCaracteresPipe implements PipeTransform {

  transform(value: Date): string {
    
    // const anioNacimiento = value.getFullYear(); //1989
    // const anioActual = new Date().getFullYear(); //2022
    // const edad = anioActual - anioNacimiento;
    
    // let resultado;
    
          1989      2022 - 18 => 2004
    // if(anioNacimiento < anioActual -18) {
      // resultado = 'Es mayor de Edad';
    // } else {
      // resultado = 'Es menor de Edad';
    // }
    
    return 'Tu parrafo tiene 15 caracteres'; 
  }
} 