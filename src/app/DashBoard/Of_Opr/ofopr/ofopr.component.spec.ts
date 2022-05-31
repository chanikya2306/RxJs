import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfoprComponent } from './ofopr.component';

describe('OfoprComponent', () => {
  let component: OfoprComponent;
  let fixture: ComponentFixture<OfoprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfoprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfoprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
