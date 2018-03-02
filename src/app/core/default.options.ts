import { BaseRequestOptions } from '@angular/http';

export class DefaultRequestOptions extends BaseRequestOptions {
  public token: string;

  constructor(angularReduxOptions?: any) {
    super();
    // const user = JSON.parse(localStorage.getItem('user'));
    const user = { token: '121212' };
    // this.token = user && user.token;
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.token);
  }

}
