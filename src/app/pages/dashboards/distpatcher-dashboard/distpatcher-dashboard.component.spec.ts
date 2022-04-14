import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistpatcherDashboardComponent } from './distpatcher-dashboard.component';

describe('DistpatcherDashboardComponent', () => {
  let component: DistpatcherDashboardComponent;
  let fixture: ComponentFixture<DistpatcherDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistpatcherDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistpatcherDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
