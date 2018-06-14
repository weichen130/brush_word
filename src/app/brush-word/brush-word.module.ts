import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DouyuComponent } from './douyu/douyu.component';
import {BrushWordRoutingModule} from './brush-word.routing';

@NgModule({
  imports: [
    CommonModule,
    BrushWordRoutingModule
  ],
  declarations: [DouyuComponent]
})
export class BrushWordModule { }
