import { VegaFeature, VegaMake } from '../../models/vehicle';
import { VehicleActions } from './vehicle.action';
import * as vehicleActions from './vehicle.action';

export const VEHICLE_STATE_NAME = '[vehicle] state';

export interface VehicleState {
  makes: VegaMake[] | null;
  features: VegaFeature[] | null;
}

export const initialState: VehicleState = {
  makes: null,
  features: null,
};

export function vehicleReducer(
  state: VehicleState = initialState,
  action: VehicleActions
) {
  switch (action.type) {
    case vehicleActions.LOAD_VEHICLE_MAKE_DATA_SUCCESS:
      return {
        ...state,
        makes: action.payload,
      };
    case vehicleActions.LOAD_VEHICLE_FEATURE_SUCCESS:
      return {
        ...state,
        features: action.payload,
      };
    default:
      return state;
  }
}
