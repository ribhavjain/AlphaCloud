import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerViewComponent } from './volunteer-view.component';

describe('VolunteerViewComponent', () => {
  let component: VolunteerViewComponent;
  let fixture: ComponentFixture<VolunteerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
