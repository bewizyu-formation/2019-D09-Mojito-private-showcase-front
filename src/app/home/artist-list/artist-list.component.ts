import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

import Artist from 'src/app/models/Artist';

const CARD_SIZE = 364
const BORDER = 188

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artists: Artist[];
  placeHolders: any[]

  scrHeight:any;
  scrWidth:any;

  elementPerLine: number;

  constructor(private el:ElementRef) {
    this.artists = [new Artist(0,'test Artist',"a@a.fr",'Amiens','NOM ARTISTE','Description courte'),
      new Artist(1,'test Artist',"a@a.fr",'Amiens','Theodore Owen','bla bla bla bla bla bla'),
      new Artist(2,'test Artist',"a@a.fr",'Amiens','Lorem Ipsum','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
      new Artist(3,'test Artist',"a@a.fr",'Amiens','Lorem Ipsum','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
      new Artist(4,'test Artist',"a@a.fr",'Amiens','Theodore Owen','Description courte')];
      this.getScreenSize();
}

  ngOnInit() {

  }

    getElementPerLine(){
      console.log(Math.floor((this.scrWidth-BORDER)))

      console.log(Math.floor((this.scrWidth-BORDER) / CARD_SIZE))
      return Math.floor((this.scrWidth-BORDER) / CARD_SIZE)
    }

    getNumberOfPlaceHolder(): number{
      const numArtist = this.artists.length
      if(numArtist > this.elementPerLine){
        return this.elementPerLine-(((numArtist-1)%this.elementPerLine)+1)
      }
      else{
        return 0
      }
    }



    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.scrHeight = window.innerHeight;
      this.scrWidth = window.innerWidth;
      console.log(this.scrHeight, this.scrWidth);
      this.elementPerLine = this.getElementPerLine();
      const numberOfPlaceholders = this.getNumberOfPlaceHolder()
      console.log("nombre placeholder :", numberOfPlaceholders)
      if(numberOfPlaceholders > 0){
        this.placeHolders = new Array(numberOfPlaceholders)
      }else{
        this.placeHolders = []
      }
    }

}
