import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterMainPricingComponent } from './starter-main-pricing.component';

describe('StarterMainPricingComponent', () => {
  let component: StarterMainPricingComponent;
  let fixture: ComponentFixture<StarterMainPricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarterMainPricingComponent]
    });
    fixture = TestBed.createComponent(StarterMainPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
