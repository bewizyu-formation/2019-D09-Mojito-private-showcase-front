import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Event from '../../models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  _events: Event[] = [];

  @Input()
  set events(val) {
    this._events = val;
    // this._events = [];
  }

  get events() {
    return this._events;
  }
  constructor(private el: ElementRef, private http: HttpClient) {
  }

  ngOnInit() {
  }

}
