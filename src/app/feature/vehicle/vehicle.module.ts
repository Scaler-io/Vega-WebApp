import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleNavigatorComponent } from './vehicle-navigator/vehicle-navigator.component';
import { VehicleWorkspaceComponent } from './vehicle-workspace/vehicle-workspace.component';
import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';
import { VehicleDashboardComponent } from './vehicle-dashboard/vehicle-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  vehicleReducer,
  VEHICLE_STATE_NAME,
} from 'src/app/shared/state/vehicle/vehicle.reducer';
import { VehicleEffect } from 'src/app/shared/state/vehicle/vehicle.effect';

@NgModule({
  declarations: [
    VehicleComponent,
    VehicleNavigatorComponent,
    VehicleWorkspaceComponent,
    VehicleRegistrationComponent,
    VehicleDashboardComponent,
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    SharedModule,
    HttpClientModule,
    EffectsModule.forFeature([VehicleEffect]),
    StoreModule.forFeature(VEHICLE_STATE_NAME, vehicleReducer),
  ],
})
export class VehicleModule {}
