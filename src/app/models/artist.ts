
export default class Artist{
  id: number;
  username: string;
  email: string;
  city: string;
  name: string;
  image: string;
  imageType :string;
  adress: string;
  description: string;
  longDescription: string;

  constructor(id:number, username: string, email: string, city: string, name:string, description: string,longDescription?: string, adress?: string, image?: string, imageType?: string){
    this.id = id;
    this.username = username;
    this.email = email;
    this.city = city;
    this.name = name;
    this.image = image;
    this.imageType = imageType;
    this.adress = adress;
    this.description = description;
    this.longDescription = longDescription;
  }
}
