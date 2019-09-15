import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AhorrosCrearPage } from './ahorros-crear.page';

const routes: Routes = [
  {
    path: '',
    component: AhorrosCrearPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AhorrosCrearPage]
})
export class AhorrosCrearPageModule {}
