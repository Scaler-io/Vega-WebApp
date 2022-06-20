export interface VehicleNavigatorMenu {
  menuItems: VehicleNavigationMenuItem[];
}

export interface VehicleNavigationMenuItem {
  icon: string;
  label: string;
  routeLink: string;
}

export enum VehicleEligibleRoutes {
  dashboard = 'vehicle dashboard',
  new = 'vehicle registration',
}

export interface VegaMake {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  models: VegaModel[];
}

export interface VegaModel {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface VegaFeature {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
