import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Heading } from 'src/app/shared/models/appTemplateData';
import { getApplicationTemplateData } from 'src/app/shared/state/template/template.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'vega-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public navData: Heading;

  constructor(private store: Store<AppState>) {}

  private subscriptions = {
    appliactionTemplateData: null,
  };

  ngOnInit(): void {
    this.subscriptions.appliactionTemplateData = this.store
      .select(getApplicationTemplateData)
      .subscribe((data) => {
        this.navData = data?.heading;
      });
  }
}
