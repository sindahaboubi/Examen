import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RacineComponent } from './composants/racine/racine.component';
import { AddDepComponent } from './composants/add-dep/add-dep.component';
import { ListDepComponent } from './composants/list-dep/list-dep.component';
import { NotFoundComponent } from './composants/not-found/not-found.component';
import { LoginComponent } from './composants/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsDepComponent } from './composants/details-dep/details-dep.component';

@NgModule({
  declarations: [
    AppComponent,
    RacineComponent,
    AddDepComponent,
    ListDepComponent,
    NotFoundComponent,
    LoginComponent,
    DetailsDepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
