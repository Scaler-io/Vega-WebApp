import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApplicationTemplateData } from './shared/models/appTemplateData';
import { AppState } from './store/app.state';
import * as templateActions from './shared/state/template/template.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public templateData: ApplicationTemplateData;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.initAppTemplateData(e.url);
        this.store.dispatch(
          new templateActions.TemplateDataInit(this.templateData)
        );
      }
    });
  }

  public initAppTemplateData(url: string): void {
    this.templateData = {
      heading: {
        brandName: 'vega',
        brandImageLink: '../../../../assets/images/V-logo.svg.png',
        brandRouteLink: '/',
        showBigBanner: url === '/' ?? false,
        navItems: [
          { navText: 'feature', navLink: '/feature' },
          { navText: 'enterprice', navLink: '/enterprice' },
          { navText: 'support', navLink: '/support' },
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
