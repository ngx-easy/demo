import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxesComponent } from './boxes.component';
import { BoxesRoutingModule } from './boxes-routing.module';
import { EasyBoxesModule } from 'projects/boxes/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    BoxesRoutingModule,
    EasyBoxesModule
  ],
  declarations: [
    BoxesComponent
  ]
})
export class BoxesModule { }
