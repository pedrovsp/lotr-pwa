import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GondorComponent } from './gondor.component';

describe('GondorComponent', () => {
  let component: GondorComponent;
  let fixture: ComponentFixture<GondorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GondorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GondorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
