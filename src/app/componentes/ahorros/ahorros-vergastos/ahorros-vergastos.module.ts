import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AhorrosVergastosPage } from './ahorros-vergastos.page';

const routes: Routes = [
  {
    path: '',
    component: AhorrosVergastosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AhorrosVergastosPage]
})
export class AhorrosVergastosPageModule {}
