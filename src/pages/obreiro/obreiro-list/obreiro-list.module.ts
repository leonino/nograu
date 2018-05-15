import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObreiroListPage } from './obreiro-list';

@NgModule({
  declarations: [
    ObreiroListPage,
  ],
  imports: [
    IonicPageModule.forChild(ObreiroListPage),
  ],
})
export class UserListPageModule {}
