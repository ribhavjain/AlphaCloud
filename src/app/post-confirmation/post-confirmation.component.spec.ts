import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostConfirmationComponent } from './post-confirmation.component';

describe('PostConfirmationComponent', () => {
  let component: PostConfirmationComponent;
  let fixture: ComponentFixture<PostConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
