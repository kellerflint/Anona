import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseDashboardComponent } from './response-dashboard.component';

describe('ResponseDashboardComponent', () => {
  let component: ResponseDashboardComponent;
  let fixture: ComponentFixture<ResponseDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
