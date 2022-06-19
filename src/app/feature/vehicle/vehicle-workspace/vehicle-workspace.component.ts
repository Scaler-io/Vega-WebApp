import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { VehicleEligibleRoutes } from 'src/app/shared/models/vehicle';

@Component({
  selector: 'vega-vehicle-workspace',
  templateUrl: './vehicle-workspace.component.html',
  styleUrls: ['./vehicle-workspace.component.scss'],
})
export class VehicleWorkspaceComponent implements OnInit {
  public routeLabel: string;

  constructor(private router: Router, private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.routeLabel = this.vehicleService.detectWorspace();

    this.router.events.subscribe((e) => {
      this.routeLabel = this.vehicleService.detectWorspace();
    });
  }
}
