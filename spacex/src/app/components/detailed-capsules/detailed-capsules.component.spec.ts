import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCapsulesComponent } from './detailed-capsules.component';

describe('DetailedCapsulesComponent', () => {
  let component: DetailedCapsulesComponent;
  let fixture: ComponentFixture<DetailedCapsulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedCapsulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCapsulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
