import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { FordComponent } from './pages/ford/ford.component';
import { AudiComponent } from './pages/audi/audi.component';
import { HomeComponent } from './pages/home/home.component';
import { LoghiComponent } from './pages/home/loghi/loghi.component';
import { AutoCasualiComponent } from './pages/home/auto-casuali/auto-casuali.component';
import { HeroComponent } from './pages/home/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FiatComponent,
    FordComponent,
    AudiComponent,
    HomeComponent,
    LoghiComponent,
    AutoCasualiComponent,
    HeroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
