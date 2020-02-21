import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { AutenticacaoComponent } from './autenticacao.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AutenticacaoComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    AutenticacaoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AutenticacaoModule { }
