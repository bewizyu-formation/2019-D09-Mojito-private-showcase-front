import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import Artist from '../models/artist';
import { MatFormFieldControl } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PATH_BOOK, PATH_EVENTS } from '../app.constantes';
import { AuthentificationService } from '../services/authentification/authentification.service';
import DateUtils from './dateUtil';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  artist$: Observable<Artist>;
  artistId: number;

  bookTime: FormControl;
  bookDate: FormControl;
  maxNumber: FormControl;
  formBook: FormGroup;

  booking: boolean;
  constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute, private route: Router,
     private http: HttpClient, private auth: AuthentificationService) {
    this.booking = false;
    this.bookDate = this.fb.control('', [Validators.required]);
    this.bookTime = this.fb.control('10:00', [Validators.required]);
    this.maxNumber = this.fb.control(30, [Validators.required]);

    this.formBook = this.fb.group(
      {
        artistCheck: this.bookDate,
        artistName: this.maxNumber,
        bookTime: this.bookTime
      });

    this.activeRoute.queryParams.subscribe(params => {
      if (params.artist !== undefined) {
        this.artistId = params.artist;
        this.booking = true;
        this.artist$ = this.getArtist(this.artistId);
        return;
      } else {
        return;
      }
    });
  }

  getArtist(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/artist/id/' + id);
  }

  isBooking() {
    return this.booking;
  }

  bookEvent() {
    this.booking = false;
    const dateString: string = '' + this.bookDate.value;
    this.artist$.subscribe(res => {
        this.http.post('http://localhost:8080/event/' + this.auth.userConnectedId + '/add',
        {'nbPlace': this.maxNumber.value,
          'date': DateUtils.convertDate(dateString, this.bookTime.value),
          'artist': res
        }).subscribe();
        this.route.navigate([PATH_EVENTS]);
      });
  }

  ngOnInit() {
  }

}
