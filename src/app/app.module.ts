import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import {RoutingModule, routedComponents} from "./routing/routing.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    AboutComponent,
    ContactComponent,
    WorkComponent,
    ExperimentsComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
