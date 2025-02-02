import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishlgComponent } from './englishlg.component';

describe('EnglishlgComponent', () => {
  let component: EnglishlgComponent;
  let fixture: ComponentFixture<EnglishlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishlgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnglishlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
