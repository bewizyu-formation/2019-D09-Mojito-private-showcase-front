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

  message: string;

  constructor() {
    // TODO faire une requête pour connaitre le lien entre utilisateur et event
    this.message = 'Validation';
  }

  ngOnInit() {
    console.log(this.event.artist.phone == null);
  }

}
