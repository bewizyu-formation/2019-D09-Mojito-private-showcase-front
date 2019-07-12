import Artist from '../models/artist';

export default class Event {

  id: number;
  date: Datetime;
  nbPlace: number;
  artist: Artist;

  constructor(id: number, date: Datetime, nbPlace: number, artist: Artist) {
    this.id = id;
    this.date = date;
    this.nbPlace = nbPlace;
    this.artist = Artist;
  }
}
