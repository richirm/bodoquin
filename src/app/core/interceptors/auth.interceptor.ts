import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor  {
  
  constructor(
    private router: Router) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');
    
    let request = req;
    
    if(token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        }
      });
    }
    
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('/inicio');
        }
        
        if (err.status === 500) {
          alert('Ha ocurrido un error, intentelo de nuevo!')
        }

        return throwError( err );

      })
    );;
  }
  
}