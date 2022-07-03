import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortResponseInputComponent } from './short-response-input.component';

describe('ShortResponseInputComponent', () => {
  let component: ShortResponseInputComponent;
  let fixture: ComponentFixture<ShortResponseInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortResponseInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortResponseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
