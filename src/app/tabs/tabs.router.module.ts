import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'usuarios',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../componentes/usuarios/usuarios.module').then(m => m.UsuariosPageModule)
          }
        ]
      },

      {
        path: 'ingresos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../componentes/ingresos/ingresos.module').then(m => m.IngresosPageModule)
          }
        ]
      },

      {
        path: 'crear-ingresos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../componentes/ingresos/crear-ingresos/crear-ingresos.module').then(m => m.CrearIngresosPageModule)
          }
        ]
      },
      {
        path: 'ver-ingresos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../componentes/ingresos/ver-ingresos/ver-ingresos.module').then(m => m.VerIngresosPageModule)
          }
        ]
      },

      {
        path: 'editar-ingresos/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../componentes/ingresos/editar-ingreso/editar-ingreso.module').then(m => m.EditarIngresoPageModule)
          }
        ]
      },

      {
        path: 'ver-ingresos-fecha',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../componentes/ingresos/ver-ingresos-fecha/ver-ingresos-fecha.module').then(m => m.VerIngresosFechaPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/usuarios',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/usuarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
