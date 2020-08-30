import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneeFormComponent } from './donee-form.component';

describe('DoneeFormComponent', () => {
  let component: DoneeFormComponent;
  let fixture: ComponentFixture<DoneeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
