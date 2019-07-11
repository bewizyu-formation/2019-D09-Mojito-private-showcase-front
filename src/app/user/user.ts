

export class User {

        public username: string;
        public email: string;
        public city: string;
        public adress: string;

    constructor(username: string, email: string, city: string, adress: string = '') {
        this.username = username;
        this.email = email;
        this.city = city;
        this.adress = adress;
    }
}
