import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';

//route
import { DahboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [HomeComponent],
  // exports: [HomeComponent],
  imports: [CommonModule, DahboardRoutingModule]
})
export class DashboardModule { }
