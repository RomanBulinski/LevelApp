import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent
  },
  {
    path: 'second-left',
    // component: ContentLeftComponent
    loadChildren: () => import('./second-left/second-left.module').then(m => m.SecondLeftModule),
  },
  {
    path: 'second-right',
    // component: ContentRightComponent
    loadChildren: () => import('./second-right/second-right.module').then(m => m.SecondRightModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
