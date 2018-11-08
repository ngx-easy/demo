import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/virtual-scroll',
    pathMatch: 'full'
  },
  {
    path: 'virtual-scroll',
    loadChildren: './demos/virtual-scroll/virtual-scroll.module#VirtualScrollModule',
    pathMatch: 'full',
    data: {
      title: 'virtual-scroll'
    }
  },
  {
    path: 'grid',
    loadChildren: './demos/grid/grid.module#GridModule',
    pathMatch: 'full',
    data: {
      title: 'grid'
    }
  },
  {
    path: 'modal',
    loadChildren: './demos/modal/modal.module#ModalModule',
    pathMatch: 'full',
    data: {
      title: 'modal'
    }
  },
  {
    path: 'boxes',
    loadChildren: './demos/boxes/boxes.module#BoxesModule',
    pathMatch: 'full',
    data: {
      title: 'boxes'
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
