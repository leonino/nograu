import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ObreirosProvider } from '../../../providers/obreiros/obreiro';
import { Obreiro } from '../../../models/obreiro.model';

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'obreiro-detail.html',
})
export class ObreiroDetailPage {
  obreiro: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private obreiroProvider: ObreirosProvider) {
    this.obreiro = this.navParams.data.obreiro;
  }

  openEditObreiro(id: string) {
    this.obreiroProvider.get(id)
      .then((result: any) => {
        console.log(result);
        //this.obreiro = JSON.parse(result);
        Object.assign(this.obreiro,result);
        console.log(this.obreiro);

        this.navCtrl.push('ObreiroEditPage', { obreiro: this.obreiro });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o obreiro. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  deleteObreiro(obreiro: Obreiro) {
    this.obreiroProvider.remove(obreiro.id)
      .then((result: any) => {
        this.navCtrl.canGoBack();
        this.toast.create({ message: 'Obreiro excluído com sucesso.', position: 'botton', duration: 3000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao excluir o obreiro. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  cancelar() {
    this.navCtrl.pop();
  }
}
