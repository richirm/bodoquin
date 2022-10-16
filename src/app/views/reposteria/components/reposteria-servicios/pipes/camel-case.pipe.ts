import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
  
  transform(valor: string, parametro?: string): string {
    return valor                                                             // => 'hola estamos esperando'
            .split(' ')                                                      // => ['hola', 'estamos', 'esperando']
            .map(palabra => palabra[0].toUpperCase() + palabra.substring(1)) // => ['Hola', 'Estamos', 'Esperando']
            .join(parametro || ' ');                                         // => 'Hola-Estamos-Esperando'                       
  }
  
}