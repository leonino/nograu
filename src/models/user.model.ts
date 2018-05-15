export class User {
    id: string;
    realm: string;
    username: string;
    email: string;
    emailVerified: boolean;
    password: string;

    constructor(realm?: string, username?: string, email?: string, password?: string, emailVerified?: boolean, id?: string) {
      this.id = (id) ? id : '';
      this.realm = (realm) ? realm : '';
      this.username = (username) ? username : '';
      this.email = (email) ? email : '';
      this.emailVerified = (emailVerified) ? emailVerified : false;
    }
}
