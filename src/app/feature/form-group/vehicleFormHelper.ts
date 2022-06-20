import { FormGroup, Validators } from '@angular/forms';
import { BaseFormHelper } from './baseFormHelper';

export class VehicleFormHelper extends BaseFormHelper {
  public static createVehicleRegistrationForm(): FormGroup {
    return this.fb.group({
      make: ['', [Validators.required]],
      model: ['', [Validators.required]],
      isRegistered: ['', [Validators.required]],
      features: this.fb.array([], [Validators.required]),
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }
}
