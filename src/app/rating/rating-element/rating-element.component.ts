import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating-element',
  templateUrl: './rating-element.component.html',
  styleUrls: ['./rating-element.component.css']
})
export class RatingElementComponent implements OnInit {

  @Input()
  editable: boolean;

  @Input()
  artistId: number;

  constructor() { }

  ngOnInit() {
  }

}
