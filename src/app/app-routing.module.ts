import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/autenticacao/autenticacao.module#AutenticacaoModule',
  },
  {
    path: 'painel',
    loadChildren: './modules/painel/painel.module#PainelModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
