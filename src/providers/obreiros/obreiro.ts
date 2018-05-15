import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Obreiro } from '../../models/obreiro.model';

@Injectable()
export class ObreirosProvider {
  private API_URL = 'http://solutil.com.br:3000/api/Obreiros';
  //private API_URL = 'http://localhost:3000/api/Obreiros';

  constructor(public http: Http) { }

  create(obreiro: Obreiro) {
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL, obreiro)
        .subscribe((result: any) => {
          console.log(result.json('_body'));
          resolve(result.json('_body'));
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  getAll(page: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL;
      console.log(url);
      this.http.get(url)
        .subscribe((result: any) => {
          console.log(result);
          resolve(result.json('_body'));
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
          resolve(result.json('_body'));
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  insert(obreiro: Obreiro) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL;

      this.http.post(url, obreiro)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  update(obreiro: Obreiro ) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + '/' + obreiro.id;

      console.log(obreiro, url);
      console.log(url);

      this.http.put(url, obreiro)
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
