import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-element',
  templateUrl: './star-element.component.html',
  styleUrls: ['./star-element.component.css']
})
export class StarElementComponent implements OnInit {

  @Input()
  id: number;
  @Input()
  rating: number;
  @Input()
  editable: boolean;



  isFilled(){
    return this.id <= this.rating + 0.5;
  }

  constructor() { }

  ngOnInit() {
  }

}
