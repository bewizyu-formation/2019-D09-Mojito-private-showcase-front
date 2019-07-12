import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { event } from '../../models/event';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-event-service',
  templateUrl: './event-service.component.html',
  styleUrls: ['./event-service.component.css']
})
export class EventServiceComponent implements OnInit {
  events: event[];

  constructor(private http: HttpClient) {
    this.getEvents();
  }

  getEvents() {
    this.http.get('http://localhost:8080/event/').pipe(delay(500)).subscribe((res: any) => {
      // this.events = res;
      console.log(res);
      this.events = [];
    }, (er) => {
      this.events = [];
    });
  }
}
