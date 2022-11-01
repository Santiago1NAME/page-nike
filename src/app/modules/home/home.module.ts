import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { FeaturedPageComponent } from './pages/featured-page/featured-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    WelcomePageComponent,
    FeaturedPageComponent,
    ProductsPageComponent,
    TeamPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
