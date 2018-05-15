import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import { ViewChild } from '@angular/core';

import { User } from '../../../models/user.model';
import { UsersProvider } from '../../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {
  users: User[];
  page: number;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private userProvider: UsersProvider) { }

  ionViewDidEnter() {
    this.users = [];
    this.page = 1;
    this.infiniteScroll.enable(true);
  }

  getUsers() {
    setTimeout(() => {
      this.page += 1;
    }, 500);
  }

  openUser(id: string) {
    this.userProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('UserDetailPage', { user: result.data });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });

  }

  openCreateUser() {
    this.navCtrl.push('UserEditPage');
  }

  openEditUser(id: string) {
    this.userProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('UserEditPage', { user: result.data });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  deleteUser(user: any) {
    this.userProvider.remove(user.id)
      .then((result: any) => {
        let index = this.users.indexOf(user);
        this.users.splice(index, 1);

        this.toast.create({ message: 'Usuário excluído com sucesso.', position: 'botton', duration: 3000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao excluir o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
}
