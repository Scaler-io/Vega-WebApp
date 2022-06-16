import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationTemplateData } from './shared/models/appTemplateData';
import { RouteHelpers } from './shared/models/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  public templateData: ApplicationTemplateData;

  constructor(public router: Router) {}

  ngOnInit() {}

  ngDoCheck(): void {
    this.initAppTemplateData();
  }

  public initAppTemplateData(): void {
    this.templateData = {
      heading: {
        brandName: 'vega',
        showBigBanner: RouteHelpers.isHomePage(this.router) ?? false,
        navItems: [
          { navText: 'feature', navLink: '/' },
          { navText: 'enterprice', navLink: '/' },
          { navText: 'support', navLink: '/' },
          { navText: 'vehicle', navLink: '/vehicle' },
        ],
        bigBanner: {
          primaryText: 'vega',
          secondaryTextLine:
            'Quickly calculate an effective pricing table for your car with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.',
        },
      },
    };
  }
}
