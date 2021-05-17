import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAdminByidComponent } from './find-admin-byid.component';

describe('FindAdminByidComponent', () => {
  let component: FindAdminByidComponent;
  let fixture: ComponentFixture<FindAdminByidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAdminByidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAdminByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
