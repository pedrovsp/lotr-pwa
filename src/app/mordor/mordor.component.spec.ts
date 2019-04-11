import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MordorComponent } from './mordor.component';

describe('MordorComponent', () => {
  let component: MordorComponent;
  let fixture: ComponentFixture<MordorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MordorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MordorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
