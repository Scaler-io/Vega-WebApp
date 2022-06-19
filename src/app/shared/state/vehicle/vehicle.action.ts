import { Action } from '@ngrx/store';
import { VegaMake } from '../../models/vehicle';

export const LOAD_VEHICLE_MAKE_DATA = 'LOAD_VEHICLE_MAKE_DATA';
export const LOAD_VEHICLE_MAKE_DATA_SUCCESS = 'LOAD_VEHICLE_MAKE_DATA_SUCCESS';
export const LOAD_VEHICLE_MAKE_DATA_ERROR = 'LOAD_VEHICLE_MAKE_DATA_ERROR';

export class LoadVehicleMakeData implements Action {
  readonly type = LOAD_VEHICLE_MAKE_DATA;
  constructor() {}
}
export class LoadVehicleMakeDataSuccess implements Action {
  readonly type = LOAD_VEHICLE_MAKE_DATA_SUCCESS;
  constructor(public payload: VegaMake[]) {}
}

export class LoadVehicleMakeDataError implements Action {
  readonly type = LOAD_VEHICLE_MAKE_DATA_ERROR;
  constructor(public payload: any) {}
}

export type VehicleActions =
  | LoadVehicleMakeData
  | LoadVehicleMakeDataSuccess
  | LoadVehicleMakeDataError;
