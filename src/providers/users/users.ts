import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './../../models/user.model';

@Injectable()
export class UsersProvider {
  private API_URL = 'http://localhost:3000/api/Users'

  constructor(public http: Http) { }

  create(email: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password
      };

      this.http.post(this.API_URL, data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password
      };

      this.http.post(this.API_URL + '/login', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  get(id: string) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + '/' + id;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  insert(user: User) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL;

      this.http.post(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  update(user: User) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL +'/'+ user.id;

      this.http.put(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  remove(id: string) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + '/' + id;

      this.http.delete(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}
