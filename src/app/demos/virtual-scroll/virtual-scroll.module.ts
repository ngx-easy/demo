import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollRoutingModule } from './virtual-scroll-routing.module';
import { VirtualScrollComponent } from './virtual-scroll.component';
import { EasyVirtualScrollModule } from 'projects/virtual-scroll/src/public_api';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [CommonModule, EasyVirtualScrollModule, VirtualScrollRoutingModule, ScrollDispatchModule],
  declarations: [VirtualScrollComponent]
})
export class VirtualScrollModule {}
