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
        path: 'gastos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../componentes/gastos/gastos.module').then(m => m.GastosPageModule)
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
        path: 'crear-gastos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../componentes/gastos/crear-gastos/crear-gastos.module').then(m => m.CrearGastosPageModule)
          }
        ]
      },
      {
        path: 'editar-gastos/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../componentes/gastos/editar-gastos/editar-gastos.module').then(m => m.EditarGastosPageModule)
          }
        ]
      },
      {
        path: 'ver-gastos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../componentes/gastos/ver-gastos/ver-gastos.module').then(m => m.VerGastosPageModule)
          }
        ]
      },
      {
        path: 'ver-gastos-fecha',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../componentes/gastos/ver-gastos-fecha/ver-gastos-fecha.module').then(m => m.VerGastosFechaPageModule)
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
