import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { map, Observable, of, switchMap, withLatestFrom } from 'rxjs';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { AppState } from 'src/app/store/app.state';
import { VegaMake } from '../../models/vehicle';
import * as vehicleActions from './vehicle.action';
import { getMakes } from './vehicle.selector';

@Injectable()
export class VehicleEffect {
  public loadMakes$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(vehicleActions.LOAD_VEHICLE_MAKE_DATA),
      withLatestFrom(this.store.select(getMakes)),
      switchMap(([actions, makes]) => {
        if (makes === null) {
          return this.vehicleService.getMakes().pipe(
            map((response) => {
              return new vehicleActions.LoadVehicleMakeDataSuccess(response);
            })
          );
        }
        return of();
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private vehicleService: VehicleService
  ) {}
}
