import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksignupComponent } from './booksignup.component';

describe('BooksignupComponent', () => {
  let component: BooksignupComponent;
  let fixture: ComponentFixture<BooksignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
