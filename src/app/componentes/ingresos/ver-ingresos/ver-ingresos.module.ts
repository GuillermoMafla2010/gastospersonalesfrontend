import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerIngresosPage } from './ver-ingresos.page';

const routes: Routes = [
  {
    path: '',
    component: VerIngresosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerIngresosPage]
  
})
export class VerIngresosPageModule {}
