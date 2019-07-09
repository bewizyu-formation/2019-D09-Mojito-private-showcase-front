import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthentificationService} from '../authentification/authentification.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthentificationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.token) {
      const clone = req.clone({
        setHeaders: {
          'Authorization': this.authService.token,
        }
      });
      return next.handle(clone);
    }
    return next.handle(req);
  }
}
