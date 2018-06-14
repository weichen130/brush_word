import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DouyuComponent} from './douyu/douyu.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: '斗鱼'
    },
    children: [
      {path: '', redirectTo: 'douyu', pathMatch: 'full'},
      {
        path: 'douyu',
        component: DouyuComponent
      }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class BrushWordRoutingModule { }
