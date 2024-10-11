import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AudiComponent } from './pages/audi/audi.component';
import { FordComponent } from './pages/ford/ford.component';
import { FiatComponent } from './pages/fiat/fiat.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'audi',
    component: AudiComponent,
  },
  {
    path: 'audi/:brand',
    component: AudiComponent,
  },
  {
    path: 'ford',
    component: FordComponent,
  },
  {
    path: 'ford/:brand',
    component: FordComponent,
  },
  {
    path: 'fiat',
    component: FiatComponent,
  },
  {
    path: 'fiat/:brand',
    component: FiatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
