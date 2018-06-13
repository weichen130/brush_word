import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DouyuComponent } from './douyu/douyu.component';
import {routing} from './bursh-word-router.module';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [DouyuComponent]
})
export class BurshWordModule { }
