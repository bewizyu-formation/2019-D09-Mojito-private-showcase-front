import { Component, OnInit, Input } from '@angular/core';
import Artist from '../../models/artist';
import { Router } from '@angular/router';
import { PATH_SIGN_IN, PATH_BOOK, PATH_ARTIST } from 'src/app/app.constantes';


@Component({
  selector: 'app-artist-element',
  templateUrl: './artist-element.component.html',
  styleUrls: ['./artist-element.component.css']
})
export class ArtistElementComponent implements OnInit {
  @Input()
  artist: Artist;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToEvent() {
    this.router.navigate([PATH_BOOK, this.artist.id]);
  }

  goToArtist() {
    this.router.navigate([PATH_ARTIST, this.artist.id]);
  }
}
