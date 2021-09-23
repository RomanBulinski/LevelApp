import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRightRoutingModule } from './second-right-routing.module';
import { ContentRightComponent } from './content-right/content-right.component';


@NgModule({
  declarations: [
    ContentRightComponent
  ],
  imports: [
    CommonModule,
    SecondRightRoutingModule
  ]
})
export class SecondRightModule { }
