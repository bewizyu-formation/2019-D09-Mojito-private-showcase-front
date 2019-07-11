import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter, delay, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ValidatorService {
  constructor(private http: HttpClient) {}

  checkLoginNotTaken(login: string) {
      return this.http.get('http://localhost:8080/common/').pipe(
      delay(1000),
      map(res => {console.log('result', res); return res; }),
      map((users: any[]) => users.filter(user => user.username === login)),
      map(users => !users.length),
          catchError((er, caught) => {console.log('error : ', er); return of(true); })
      );
  }
}
