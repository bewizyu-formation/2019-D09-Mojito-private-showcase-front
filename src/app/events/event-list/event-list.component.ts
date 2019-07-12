import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../models/event';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  _events: event[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
  @Input()
  set events(val) {
    this._events = val;
  }
}
