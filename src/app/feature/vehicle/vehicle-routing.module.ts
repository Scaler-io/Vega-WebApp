import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle.component';
import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';
import { VehicleDashboardComponent } from './vehicle-dashboard/vehicle-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: VehicleComponent,
    children: [
      { path: 'dashboard', component: VehicleDashboardComponent },
      { path: 'new', component: VehicleRegistrationComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleRoutingModule {}
