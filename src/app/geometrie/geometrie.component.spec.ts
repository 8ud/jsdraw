import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometrieComponent } from './geometrie.component';

describe('GeometrieComponent', () => {
  let component: GeometrieComponent;
  let fixture: ComponentFixture<GeometrieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeometrieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
