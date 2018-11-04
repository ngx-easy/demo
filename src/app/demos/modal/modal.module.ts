import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRoutingModule } from './modal-routing.module';
import { MaterialModule } from '../../material.module';
import { ModalComponent } from './modal.component';
import { EasyModalModule } from 'projects/modal/src/public_api';
import { ExampleModalComponent } from './example-modal/example-modal.component';


@NgModule({
  imports: [
    CommonModule,
    ModalRoutingModule,
    MaterialModule,
    EasyModalModule.forRoot()
  ],
  declarations: [
    ModalComponent,
    ExampleModalComponent,
  ]
})
export class ModalModule { }
