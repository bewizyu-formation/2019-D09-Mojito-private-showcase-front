import Artist from '../models/artist';

export default class Event {

  id: number;
  date: Date;
  nbPlace: number;
  nbPlaceRestante: number;
  artist: Artist;

  constructor(id: number, date: Date, nbPlace: number,  nbPlaceRestante: number, artist: Artist) {
    this.id = id;
    this.date = date;
    this.nbPlace = nbPlace;
    this.nbPlaceRestante = nbPlaceRestante;
    this.artist = artist;
  }
}
