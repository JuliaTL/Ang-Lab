export interface IUser {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: number;
  localId: string;
  tokenExpDate: Date;
  registered?: boolean;
}

export class User {
  constructor(public  email: string,
              public id: string,
              private _token: string,
              private tokenExpDate: Date) {
  }
  get token() {
    if(!this.tokenExpDate || new Date() > this.tokenExpDate){
      return null;
    }
    return this._token;
  }
}
