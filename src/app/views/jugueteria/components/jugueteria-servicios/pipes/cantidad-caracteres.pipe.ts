import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cantidadCaracteres'
  
})
export class CantidadCaracteresPipe implements PipeTransform {

  transform(value: string): string {
            
    const longitud = value.length;      
   
    return `Tu parrafo tiene ${longitud} caracteres`; 
  }
} 