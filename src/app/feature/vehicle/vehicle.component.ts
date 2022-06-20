import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as vehicleActions from '../../shared/state/vehicle/vehicle.action';

@Component({
  selector: 'vega-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new vehicleActions.LoadVehicleMakeData());
    this.store.dispatch(new vehicleActions.LoadVehicleFeature());
  }
}
