import { Component, OnInit, ElementRef, HostListener, Input, EventEmitter, Output } from '@angular/core';

import Artist from 'src/app/models/Artist';

const CARD_SIZE = 364
const BORDER = 188

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  _artists:Artist[]

  loading: boolean;

  @Input()
  set artists(val) {
    console.log('changed', val);
    this._artists = val
    this.loading=false;
    this.getScreenSize();
  }

  get artists(){
    return this._artists
  }

  placeHolders: any[]

  scrHeight:any;
  scrWidth:any;

  elementPerLine: number;

  @Output()
  loadingRequired:EventEmitter<void> = new EventEmitter<void>();


  constructor(private el:ElementRef) {
      this.loading = true;
      this.getScreenSize();
    }

    ngOnInit() {
      this.loading = true;
    }

    isLoadingArtist(){
      return this.loading;
    }

    getElementPerLine(){
      console.log(Math.floor((this.scrWidth-BORDER)))

      console.log(Math.floor((this.scrWidth-BORDER) / CARD_SIZE))
      return Math.floor((this.scrWidth-BORDER) / CARD_SIZE)
    }

    getNumberOfPlaceHolder(): number{
      const numArtist = (this.artists || []).length + (this.isLoadingArtist()?1:0);
      if(numArtist > this.elementPerLine){
        return this.elementPerLine-(((numArtist-1)%this.elementPerLine)+1)
      }
      else{
        return 0
      }
    }


    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event?) {
      if ((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight) {
        console.log("scrolled bottom")
        this.loading = true;
        this.getScreenSize()
        this.loadingRequired.emit();
      }
      /*console.log(window.scrollY);
      console.log(window.innerWidth);
      console.log(window.pageYOffset);
      console.log(window);*/
    }

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.scrHeight = window.innerHeight;
      this.scrWidth = window.innerWidth;
      console.log(this.scrHeight, this.scrWidth);
      this.elementPerLine = this.getElementPerLine();
      const numberOfPlaceholders = this.getNumberOfPlaceHolder();

      console.log("nombre placeholder :", numberOfPlaceholders)
      if(numberOfPlaceholders > 0){
        this.placeHolders = new Array(numberOfPlaceholders)
      }else{
        this.placeHolders = []
      }
    }

}
