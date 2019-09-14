import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerGastosFechaPage } from './ver-gastos-fecha.page';

const routes: Routes = [
  {
    path: '',
    component: VerGastosFechaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerGastosFechaPage]
})
export class VerGastosFechaPageModule {}
