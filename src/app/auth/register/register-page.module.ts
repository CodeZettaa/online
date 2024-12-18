import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterPageRoutingModule,
    FormsModule,
    CarouselModule,
    FeatherIconModule
  ]
})
export class RegisterPageModule { }
