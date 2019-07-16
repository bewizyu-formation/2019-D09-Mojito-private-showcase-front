import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Event from '../../models/event';
import Artist from '../../models/artist';
import { delay } from 'rxjs/operators';
import { AuthentificationService } from '../../services/authentification/authentification.service';

@Component({
  selector: 'app-event-service',
  templateUrl: './event-service.component.html',
  styleUrls: ['./event-service.component.css']
})
export class EventServiceComponent implements OnInit {
  events: Event[] = [];
  artist1: Artist;
  event1: Event;
  event2: Event;
  event3: Event;
  event4: Event;

  owned: number = this.auth.userConnectedId;
  incoming = true;
  past = true;

  constructor(private http: HttpClient, private auth: AuthentificationService) {
    this.getEvents();
  }

  getEvents() {
    console.log('http://localhost:8080/event/?owned=' + this.owned + '&incoming=' + this.incoming + '&past=' + this.past);
    this.http.get('http://localhost:8080/event/?owned='
      + this.owned
       + '&incoming='
        + this.incoming
         + '&past='
          + this.past).pipe(delay(500)).subscribe((res: any) => {
      this.events = res;
      console.log(res);
      // this.events = this.mockedEvents();
      // this.events = [];
    }, (er) => {
      this.events = [];
    });
  }

  ngOnInit() {
    this.getEvents();
  }

  mockedEvents() {
    this.artist1 = new Artist(
      1 ,
      'Utilisateur2' ,
      'Utilisateur2@aa.aa',
      'Utilisateur2City',
      'Utilisateur2Name',
      'Utilisateur2descritipon short',
      '',
      'adresse de utilisateur1',
      'https://dw9to29mmj727.cloudfront.net/promo/2016/5248-SeriesHeaders_NARSHP_2000x800.jpg',
      '',
      '159159-159');
    this.event1 = new Event(1, new Date(), 15, 10, this.artist1 );
    this.event2 = new Event(2, new Date(), 25, 20, this.artist1 );

    this.artist1 = new Artist( 12 ,
      'Utilisateur3',
      'Utilisateur3@aa.aa',
      'Utilisateur2City',
      'Utilisateur3Name',
      'Utilisateur3descritipon short',
      '',
      'adresse de utilisateur3',
      'https://dw9to29mmj727.cloudfront.net/promo/2016/5248-SeriesHeaders_NARSHP_2000x800.jpg',
      '');
    this.event3 = new Event(3, new Date(), 35, 30, this.artist1 );
    this.event4 = new Event(4, new Date(), 45, 0, this.artist1 );

    return [ this.event1, this.event2, this.event3, this.event4 ];
  }

  updateOwned() {
    if (this.owned === this.auth.userConnectedId) {
      this.owned = 0;
    } else {
      this.owned = this.auth.userConnectedId;
    }
    this.getEvents();
  }

  updatePast() {
    this.past = !this.past;
    this.getEvents();
  }

  updateIncoming() {
    this.incoming = !this.incoming;
    this.getEvents();
  }
}
