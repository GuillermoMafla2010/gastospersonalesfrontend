import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AhorrosVeringresosPage } from './ahorros-veringresos.page';

const routes: Routes = [
  {
    path: '',
    component: AhorrosVeringresosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AhorrosVeringresosPage]
})
export class AhorrosVeringresosPageModule {}
