import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayorEdad'
})
export class MayorEdadPipe implements PipeTransform {

  transform(value: Date): string {
    console.log(value)
    const anioNacimiento = value.getFullYear();
    const anioActual = new Date().getFullYear();
    const edad = anioActual - anioNacimiento;
    
    let resultado;
    
    if(anioNacimiento < anioActual - 18) {
      resultado = 'Es mayor de edad';
    } else {
      resultado = 'Es menor de edad';
    }
    
    return `${resultado}, Tiene la edad de: ${edad}`;
  }
}