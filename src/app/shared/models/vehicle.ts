export interface VehicleNavigatorMenu {
  menuItems: VehicleNavigationMenuItem[];
}

export interface VehicleNavigationMenuItem {
  icon: string;
  label: string;
  routeLink: string;
}
