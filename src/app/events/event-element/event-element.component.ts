import { Component, OnInit, Input } from '@angular/core';
import Event from '../../models/event';

@Component({
  selector: 'app-event-element',
  templateUrl: './event-element.component.html',
  styleUrls: ['./event-element.component.css']
})
export class EventElementComponent implements OnInit {

	@Input()
  event: Event;

  constructor() { }

  ngOnInit() {
  }

}