import { Component, Output, EventEmitter, OnInit, } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'bodoquin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() onClickMenu: EventEmitter<any> = new EventEmitter();
  
  fondo: string;
  
  constructor(
    private router: Router) {}
    
  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        let path = location.hash.substring(2).split('?')[0];
        
        if(path === 'tecnologia') {
          this.fondo = 'red';
        }
        if(path === 'reposteria') {
          this.fondo = 'blue';
        }
        if(path === 'moda') {
          this.fondo = 'green';
        }
        if(path === 'jugueteria') {
          this.fondo = 'yellow';
        }
      });   
  }
  
}