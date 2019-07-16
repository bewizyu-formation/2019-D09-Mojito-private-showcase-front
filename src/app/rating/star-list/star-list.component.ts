import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-list',
  templateUrl: './star-list.component.html',
  styleUrls: ['./star-list.component.css']
})
export class StarListComponent implements OnInit {

  @Input()
  editable: boolean;
  idList: number[] = [1, 2, 3, 4, 5];
  @Input()
  ratings: number[];

  getRatingNumber() {
    return this.ratings.length;
  }

  getAverageNote() {
    if (this.getRatingNumber() === 0) {
      return 0;
    } else {
      let note = 0;
      this.ratings.forEach(num => {
        note += num;
      });

      return note / this.getRatingNumber();
    }
  }

  constructor() {
    this.ratings = [2, 5, 2, 1, 3, 5, 5, 5];
  }

  ngOnInit() {
  }

}
