import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Heading } from 'src/app/shared/models/appTemplateData';

@Component({
  selector: 'vega-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() navData: Heading;

  constructor() {}

  ngOnInit(): void {}
}
