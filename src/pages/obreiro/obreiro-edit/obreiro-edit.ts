import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ObreirosProvider } from '../../../providers/obreiros/obreiro';
import { Obreiro } from './../../../models/obreiro.model';

@IonicPage()
@Component({
  selector: 'page-user-edit',
  templateUrl: 'obreiro-edit.html',
})
export class ObreiroEditPage {

  model: Obreiro;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private obreiroProvider: ObreirosProvider ) {
    if (this.navParams.data.obreiro) {
      this.model = this.navParams.data.obreiro;
    } else {
      this.model = new Obreiro();
    }
  }

  salvar() {
    if(this.valido()) {
      this.saveObreiro()
      .then(() => {
        this.toast.create({ message: 'Obreiro salvo com sucesso.', position: 'botton', duration: 3000 }).present();
        this.navCtrl.pop();
      })
      .catch((error) => {
        this.toast.create({ message: 'Erro ao salvar o obreiro. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      })
    }
  }

  private cancelar() {
    this.toast.create({ message: 'Edição cancelada pelo operador.', position: 'botton', duration: 2000 }).present();
    this.navCtrl.pop();
  }

  private saveObreiro() {
    // Se a Validação estiver OK;
      if (this.model.id) {
        return this.obreiroProvider.update(this.model);
      } else {
        return this.obreiroProvider.insert(this.model);
      }
  }

  private valido() {
    let bOK = (this.model != null);
    let msg = 'Obreiro Inválido!!';

    if(bOK && (this.model.nome && this.model.nome.split(' ').length>=2)) {
      bOK = true;
    } else {
      bOK = false;
      msg = 'Nome do obreiro não informado ou falta o sobrenome!!';
    }

    if (!bOK) {
      this.toast.create({ message: msg, position: 'botton', duration: 3000 }).present();
    }

    return bOK;
  }

}
