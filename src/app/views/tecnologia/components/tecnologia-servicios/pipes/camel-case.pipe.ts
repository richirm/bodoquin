import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
  transform(valor: string, parametro?: string): string {
    return valor 
            .split(' ')
            .map(palabra => palabra[0].toUpperCase() + palabra.substring(1))
            .join(parametro || ' ');
  }
}