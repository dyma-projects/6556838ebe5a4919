import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice1EnfantComponent } from './exercice1/exercice1-enfant/exercice1-enfant.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { Exercice3EnfantComponent } from './exercice3/exercice3-enfant/exercice3-enfant.component';
import { Exercice4Component } from './exercice4/exercice4.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercice2Component,
    Exercice1Component,
    Exercice1EnfantComponent,
    Exercice3Component,
    Exercice3EnfantComponent,
    Exercice4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
