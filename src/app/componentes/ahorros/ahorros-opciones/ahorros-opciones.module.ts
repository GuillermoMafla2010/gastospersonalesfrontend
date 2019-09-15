import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AhorrosOpcionesPage } from './ahorros-opciones.page';

const routes: Routes = [
  {
    path: '',
    component: AhorrosOpcionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AhorrosOpcionesPage]
})
export class AhorrosOpcionesPageModule {}
