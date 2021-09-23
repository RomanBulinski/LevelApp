import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondLeftRoutingModule } from './second-left-routing.module';
import { ContentLeftComponent } from './content-left/content-left.component';


@NgModule({
  declarations: [
    ContentLeftComponent
  ],
  imports: [
    CommonModule,
    SecondLeftRoutingModule
  ]
})
export class SecondLeftModule { }
