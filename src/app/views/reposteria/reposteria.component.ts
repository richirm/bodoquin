import { Component } from '@angular/core';

@Component({
  selector: 'bodoquin-reposteria',
  templateUrl: './reposteria.component.html',
  styleUrls: ['./reposteria.component.css']
})
export class ReposteriaComponent {
  
  titulo: String = 'Mi vista reposteria';
  nombre: String = 'Pepito';
  edad: Number = 15;
  curso: String = 'Matematica';
  
}