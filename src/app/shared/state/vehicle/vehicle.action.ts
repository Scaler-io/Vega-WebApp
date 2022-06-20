import { Action } from '@ngrx/store';
import { VegaFeature, VegaMake } from '../../models/vehicle';

export const LOAD_VEHICLE_MAKE_DATA = 'LOAD_VEHICLE_MAKE_DATA';
export const LOAD_VEHICLE_MAKE_DATA_SUCCESS = 'LOAD_VEHICLE_MAKE_DATA_SUCCESS';

export const LOAD_VEHICLE_FEATURE = 'LOAD_VEHICLE_FEATURE';
export const LOAD_VEHICLE_FEATURE_SUCCESS = 'LOAD_VEHICLE_FEATURE_SUCCESS';

export class LoadVehicleMakeData implements Action {
  readonly type = LOAD_VEHICLE_MAKE_DATA;
  constructor() {}
}
export class LoadVehicleMakeDataSuccess implements Action {
  readonly type = LOAD_VEHICLE_MAKE_DATA_SUCCESS;
  constructor(public payload: VegaMake[]) {}
}

export class LoadVehicleFeature implements Action {
  readonly type = LOAD_VEHICLE_FEATURE;
  constructor() {}
}

export class LoadVehicleFeatureSuccess implements Action {
  readonly type = LOAD_VEHICLE_FEATURE_SUCCESS;
  constructor(public payload: VegaFeature[]) {}
}

export type VehicleActions =
  | LoadVehicleMakeData
  | LoadVehicleMakeDataSuccess
  | LoadVehicleFeature
  | LoadVehicleFeatureSuccess;
