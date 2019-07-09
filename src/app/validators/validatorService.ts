import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, filter, delay } from 'rxjs/operators';


@Injectable()
export class ValidatorService {
  constructor(private http: Http) {}

  checkLoginNotTaken(login: string) {
    return this.http
      .get('localhost:4200/common/').pipe(
        delay(1000),
        map(res => res.json()),
        map(users => users.filter(user => user.username === login)),
        map(users => !users.length)
      );
  }
}
