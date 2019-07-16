import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-star-service',
  templateUrl: './star-service.component.html',
  styleUrls: ['./star-service.component.css']
})
export class StarServiceComponent implements OnInit {

  @Input()
  artistId: number;
  @Input()
  editable: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getVotes() {
    this.http.get('http://localhost:8080/vote/artist/' + this.artistId).subscribe((res) => {
      console.log(res);
    });
  }
}
