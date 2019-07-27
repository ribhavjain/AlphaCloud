import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugeeViewComponent } from './refugee-view.component';

describe('RefugeeViewComponent', () => {
  let component: RefugeeViewComponent;
  let fixture: ComponentFixture<RefugeeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefugeeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefugeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
