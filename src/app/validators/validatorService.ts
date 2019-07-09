import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ValidatorService {
  constructor(private http: HttpClient) {}

  checkLoginNotTaken(login: string) {
    console.log("checking login")
      return this.http.get('http://localhost:8080/common/').pipe(
        delay(1000),
        map(res => {console.log(res);return res}),
        map((users : any[]) => users.filter(user => user.username === login)),
        map(users => !users.length)
      );
  }
}
