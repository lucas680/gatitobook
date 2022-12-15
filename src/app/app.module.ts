import { RodapeModule } from './componentes/rodape/rodape.module';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CartoaComponent } from './componentes/cartoa/cartoa.component';

@NgModule({
  declarations: [
    AppComponent,
    CartoaComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
    RodapeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
