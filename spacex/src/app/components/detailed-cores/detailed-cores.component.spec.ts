import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCoresComponent } from './detailed-cores.component';

describe('DetailedCoresComponent', () => {
  let component: DetailedCoresComponent;
  let fixture: ComponentFixture<DetailedCoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedCoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
