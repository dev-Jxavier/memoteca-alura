import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveThoughtComponent } from './remove-thought.component';

describe('RemoveThoughtComponent', () => {
  let component: RemoveThoughtComponent;
  let fixture: ComponentFixture<RemoveThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveThoughtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
