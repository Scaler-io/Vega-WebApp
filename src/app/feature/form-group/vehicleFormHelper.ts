import { FormGroup, Validators } from '@angular/forms';
import { BaseFormHelper } from './baseFormHelper';

export class VehicleFormHelper extends BaseFormHelper {
  public static createVehicleRegistrationForm(): FormGroup {
    return this.fb.group({
      make: ['', [Validators.required]],
      model: ['', [Validators.required]],
    });
  }
}
