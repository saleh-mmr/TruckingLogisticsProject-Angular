import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatcherSignInComponent } from './dispatcher-sign-in.component';

describe('DispatcherSignInComponent', () => {
  let component: DispatcherSignInComponent;
  let fixture: ComponentFixture<DispatcherSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatcherSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatcherSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
