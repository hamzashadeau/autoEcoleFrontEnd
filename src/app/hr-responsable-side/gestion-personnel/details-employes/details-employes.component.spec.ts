import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEmployesComponent } from './details-employes.component';

describe('DetailsEmployesComponent', () => {
  let component: DetailsEmployesComponent;
  let fixture: ComponentFixture<DetailsEmployesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsEmployesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
