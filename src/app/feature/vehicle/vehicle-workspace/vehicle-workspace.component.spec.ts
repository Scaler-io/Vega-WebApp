import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleWorkspaceComponent } from './vehicle-workspace.component';

describe('VehicleWorkspaceComponent', () => {
  let component: VehicleWorkspaceComponent;
  let fixture: ComponentFixture<VehicleWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
