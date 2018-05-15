import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import { ViewChild } from '@angular/core';

import { ObreirosProvider } from '../../../providers/obreiros/obreiro';
import { Obreiro } from '../../../models/obreiro.model';

@IonicPage()
@Component({
  selector: 'page-obreiro-list',
  templateUrl: 'obreiro-list.html',
})
export class ObreiroListPage {
  obreiros: any[];
  page: number;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private obreiroProvider: ObreirosProvider) { }

  ionViewDidEnter() {
    this.obreiros = [];
    this.page = 1;
    this.infiniteScroll.enable(true);
    this.getAllObreiros(this.page);
  }

  getAllObreiros(page: number) {
    this.obreiroProvider.getAll(page)
      .then((result: any) => {
        for (var i = 0; i < result.length; i++) {
          var obreiro = result[i];
          this.obreiros.push(obreiro);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.obreiros.length == result.length) {
            this.infiniteScroll.enable(false);
          }
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os Obreiros. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  gestoEvent($event, id: string) {
    console.log($event);
    this.openEditObreiro(id);
  }

  getObreiros() {
    setTimeout(() => {
      this.page += 1;
      this.getAllObreiros(this.page);
    }, 500);
  }

  openObreiro(id: string) {
    this.obreiroProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('ObreiroDetailPage', { obreiro: result });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o obreiro. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });

  }

  openCreateObreiro() {
    this.navCtrl.push('ObreiroEditPage');
  }

  openEditObreiro(id: string) {
    this.obreiroProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('ObreiroEditPage', { obreiro: result });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o obreiro. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  deleteObreiro(obreiro: Obreiro) {
    this.obreiroProvider.remove(obreiro.id)
      .then((result: any) => {
        let index = this.obreiros.indexOf(obreiro);
        this.obreiros.splice(index, 1);

        this.toast.create({ message: 'Obreiro excluído com sucesso.', position: 'botton', duration: 3000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao excluir o obreiro. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
}
