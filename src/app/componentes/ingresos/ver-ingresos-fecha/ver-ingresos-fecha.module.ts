import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerIngresosFechaPage } from './ver-ingresos-fecha.page';

const routes: Routes = [
  {
    path: '',
    component: VerIngresosFechaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerIngresosFechaPage]
})
export class VerIngresosFechaPageModule {}
