import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: {
      title: '首页'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [/* CanDeactivateGuard, AuthGuard*/]
})
export class AppRoutingModule {}
