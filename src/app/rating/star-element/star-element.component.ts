import { Component, OnInit, Input, HostListener } from '@angular/core';

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

  @HostListener('mousemove') onMouseMove() {
    console.log(this.editable);
    if (this.editable) {
      console.log('hovering over ' + this.id);
    }
  }

  isFilled() {
    return this.id <= this.rating + 0.5;
  }

  constructor() { }

  ngOnInit() {
  }

}
