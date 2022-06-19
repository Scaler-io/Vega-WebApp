import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SelectOption } from 'src/app/shared/components/selectbox/select-box.model';
import { VegaMakeToSelectOptions } from 'src/app/shared/mappers/vehicle.mapper';
import { AppState } from 'src/app/store/app.state';
import { VehicleFormHelper } from '../../form-group/vehicleFormHelper';
import { getMakes } from 'src/app/shared/state/vehicle/vehicle.selector';
import { VegaMake } from 'src/app/shared/models/vehicle';

@Component({
  selector: 'vega-vehicle-registration',
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.scss'],
})
export class VehicleRegistrationComponent implements OnInit, OnDestroy {
  public controller: FormControl = new FormControl();
  public vehicleRegistrationForm: FormGroup;
  public vehicleMakes: VegaMake[];
  public vehicleMakeOptions: SelectOption[];
  public vehicleModelOptions: SelectOption[];

  constructor(private store: Store<AppState>) {}

  private subscriptions = {
    getVehicleMakes: null,
  };

  ngOnInit(): void {
    this.vehicleRegistrationForm =
      VehicleFormHelper.createVehicleRegistrationForm();

    this.subscriptions.getVehicleMakes = this.store
      .select(getMakes)
      .subscribe((makes) => {
        this.vehicleMakes = makes;
        this.vehicleMakeOptions = VegaMakeToSelectOptions.map(makes);
      });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.getVehicleMakes) {
      this.subscriptions.getVehicleMakes.unsubscribe();
    }
  }

  public onChange() {
    const makeSelected = this.vehicleRegistrationForm.get('make').value;
    if (makeSelected) {
      this.vehicleModelOptions = VegaMakeToSelectOptions.map(
        this.vehicleMakes.find((i) => i.id === makeSelected)?.models
      );
    } else {
      this.vehicleModelOptions = [];
    }
    this.vehicleRegistrationForm.get('model').setValue('');
  }
}
