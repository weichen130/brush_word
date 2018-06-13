import { RouterModule, Routes } from '@angular/router';
import {BurshWordModule} from './app/bursh-word/bursh-word.module';


const routes: Routes = [
  { path: '/douyu', component: BurshWordModule }
];

export const routing = RouterModule.forRoot(routes);
