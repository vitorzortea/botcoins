import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [PainelComponent, MenuComponent, MainComponent],
  imports: [
    CommonModule,
    PainelRoutingModule
  ]
})
export class PainelModule { }
