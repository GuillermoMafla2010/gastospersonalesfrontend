import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'usuarios', loadChildren: './componentes/usuarios/usuarios.module#UsuariosPageModule' },
  { path: 'ingresos', loadChildren: './componentes/ingresos/ingresos.module#IngresosPageModule' },
  { path: 'gastos', loadChildren: './componentes/gastos/gastos.module#GastosPageModule' },
  { path: 'crear-ingresos', loadChildren: './componentes/ingresos/crear-ingresos/crear-ingresos.module#CrearIngresosPageModule' },
  { path: 'ver-ingresos', loadChildren: './componentes/ingresos/ver-ingresos/ver-ingresos.module#VerIngresosPageModule' },
  { path: 'ver-ingresos-fecha', loadChildren: './componentes/ingresos/ver-ingresos-fecha/ver-ingresos-fecha.module#VerIngresosFechaPageModule' },
  { path: 'editar-ingreso', loadChildren: './componentes/ingresos/editar-ingreso/editar-ingreso.module#EditarIngresoPageModule' },
  { path: 'crear-gastos', loadChildren: './componentes/gastos/crear-gastos/crear-gastos.module#CrearGastosPageModule' },
  { path: 'ver-gastos', loadChildren: './componentes/gastos/ver-gastos/ver-gastos.module#VerGastosPageModule' },
  { path: 'ver-gastos-fecha', loadChildren: './componentes/gastos/ver-gastos-fecha/ver-gastos-fecha.module#VerGastosFechaPageModule' },
  { path: 'editar-gastos', loadChildren: './componentes/gastos/editar-gastos/editar-gastos.module#EditarGastosPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
