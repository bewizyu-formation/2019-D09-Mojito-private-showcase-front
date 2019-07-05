

export class User {

        public identifiant: string;
        public email: string;
        public city: string;

    constructor(identifiant: string, email: string, city: string) {
        this.identifiant = identifiant;
        this.email = email;
        this.city = city;
    }
}