import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './AllComponents/home/home.component';
import { LinkComponent } from './AllComponents/link/link.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:LinkComponent,
    path:'link'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
