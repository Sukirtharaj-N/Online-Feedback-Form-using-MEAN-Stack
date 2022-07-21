import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedFormComponent } from './components/feed-form/feed-form.component';
import { DisplayComponent } from './components/display/display.component';

const routes: Routes = [
  { path:'', component: FeedFormComponent},
  { path:'display', component: DisplayComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
