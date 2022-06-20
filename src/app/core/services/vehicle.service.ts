import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  VegaFeature,
  VegaMake,
  VehicleEligibleRoutes,
} from 'src/app/shared/models/vehicle';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(public router: Router, private http: HttpClient) {}

  public getMakes(): Observable<VegaMake[]> {
    return this.http
      .get<VegaMake[]>(`${environment.vegaApiUrl}/request/makes`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public getFeatures(): Observable<VegaFeature[]> {
    return this.http
      .get<VegaFeature[]>(`${environment.vegaApiUrl}/request/features`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public isVehicleRegistrationPage(): boolean {
    return this.router.url.includes('/vehicle/new');
  }

  public detectWorspace(): string {
    if (this.isVehicleRegistrationPage()) {
      return VehicleEligibleRoutes.new;
    } else {
      return VehicleEligibleRoutes.dashboard;
    }
  }
}
