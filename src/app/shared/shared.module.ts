import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
