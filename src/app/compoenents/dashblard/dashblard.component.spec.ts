import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashblardComponent } from './dashblard.component';

describe('DashblardComponent', () => {
  let component: DashblardComponent;
  let fixture: ComponentFixture<DashblardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashblardComponent]
    });
    fixture = TestBed.createComponent(DashblardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
