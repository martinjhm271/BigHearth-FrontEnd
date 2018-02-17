export class User {
    private firstname: string;
    private lastname: string;
    private image: string;
    private email: string;
    private username: string;
    private password: string;

    constructor(firstname: string, lastname: string, image: string, username: string, email: string , password: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}