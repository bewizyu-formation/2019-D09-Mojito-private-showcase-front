import { Component, OnInit } from '@angular/core';
import Artist from '../../models/Artist';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-artist-service',
  templateUrl: './artist-service.component.html',
  styleUrls: ['./artist-service.component.css']
})
export class ArtistServiceComponent implements OnInit {

  artists: Artist[];

  constructor(private http: HttpClient) {
    this.getArtists();
  }

  getArtists() {
    this.http.get('http://localhost:8080/artist/').pipe(delay(500)).subscribe((res: any) => {
      this.artists = res;
    }, (er) => {
      this.artists = [];
    });
  }

  ngOnInit() {
  }

}
