import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VehicleState, VEHICLE_STATE_NAME } from './vehicle.reducer';

const vehicleState = createFeatureSelector<VehicleState>(VEHICLE_STATE_NAME);

export const getMakes = createSelector(vehicleState, (state: VehicleState) => {
  return state.makes;
});
