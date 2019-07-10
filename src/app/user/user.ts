

export class User {

        public identifiant: string;
        public email: string;
        public city: string;
        public password: string;

    constructor(identifiant: string, email: string, password: string, city: string) {
        this.identifiant = identifiant;
        this.email = email;
        this.city = city;
        this.password = password;
    }
}
