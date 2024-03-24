import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThoughtComponent } from './card-thought.component';

describe('CardThoughtComponent', () => {
  let component: CardThoughtComponent;
  let fixture: ComponentFixture<CardThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardThoughtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
