import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComerciosPage } from './comercios.page';
import{ AngularFirestoreModule } from '@angular/fire/firestore';
const routes: Routes = [
  {
    path: '',
    component: ComerciosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFirestoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComerciosPage]
})
export class ComerciosPageModule {}
