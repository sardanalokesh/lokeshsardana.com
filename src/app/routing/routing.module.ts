import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "../about/about.component";
import {ContactComponent} from "../contact/contact.component";
import {ExperimentsComponent} from "../experiments/experiments.component";
import {WorkComponent} from "../work/work.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'experiments',
    component: ExperimentsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

export const routedComponents = [AboutComponent, WorkComponent, ExperimentsComponent, ContactComponent];
