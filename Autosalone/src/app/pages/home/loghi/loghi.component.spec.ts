import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoghiComponent } from './loghi.component';

describe('LoghiComponent', () => {
  let component: LoghiComponent;
  let fixture: ComponentFixture<LoghiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoghiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoghiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
