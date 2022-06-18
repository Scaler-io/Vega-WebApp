import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleNavigatorComponent } from './vehicle-navigator/vehicle-navigator.component';
import { VehicleWorkspaceComponent } from './vehicle-workspace/vehicle-workspace.component';



@NgModule({
  declarations: [
    VehicleComponent,
    VehicleNavigatorComponent,
    VehicleWorkspaceComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
