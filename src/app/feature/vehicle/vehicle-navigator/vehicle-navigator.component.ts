import { Component, Input, OnInit } from '@angular/core';
import { VehicleNavigatorMenu } from 'src/app/shared/models/vehicle';

@Component({
  selector: 'vega-vehicle-navigator',
  templateUrl: './vehicle-navigator.component.html',
  styleUrls: ['./vehicle-navigator.component.scss'],
})
export class VehicleNavigatorComponent implements OnInit {
  @Input() vehichleNavigatorMenu: VehicleNavigatorMenu;

  constructor() {}

  ngOnInit(): void {
    this.initVehicleNavigation();
  }

  public initVehicleNavigation() {
    this.vehichleNavigatorMenu = {
      menuItems: [
        { icon: 'fa fa-dashboard', label: 'dashboard', routeLink: 'dashboard' },
        { icon: 'fa fa-plus', label: 'create new', routeLink: 'new' },
      ],
    };
  }
}
