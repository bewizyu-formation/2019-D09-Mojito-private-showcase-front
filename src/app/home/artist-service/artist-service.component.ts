import { Component, OnInit } from '@angular/core';
import Artist from 'src/app/models/artist';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-artist-service',
  templateUrl: './artist-service.component.html',
  styleUrls: ['./artist-service.component.css']
})
export class ArtistServiceComponent implements OnInit {

  artists : Artist[]

  constructor(private http : HttpClient) {
    this.getArtists();
  }

  getArtists(){
    console.log('retrieving artists')
    this.http.get('http://localhost:8080/artist/').pipe(delay(500)).subscribe((res:any)=>{
      console.log(res);
      this.artists=res;
    },(er) => {
      console.log(er);
      this.artists=[]
    });
  }

  ngOnInit() {
  }

}
