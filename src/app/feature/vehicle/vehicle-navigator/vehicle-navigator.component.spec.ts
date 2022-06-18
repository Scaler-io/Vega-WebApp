import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleNavigatorComponent } from './vehicle-navigator.component';

describe('VehicleNavigatorComponent', () => {
  let component: VehicleNavigatorComponent;
  let fixture: ComponentFixture<VehicleNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
