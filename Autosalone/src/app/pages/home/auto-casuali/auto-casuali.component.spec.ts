import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCasualiComponent } from './auto-casuali.component';

describe('AutoCasualiComponent', () => {
  let component: AutoCasualiComponent;
  let fixture: ComponentFixture<AutoCasualiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoCasualiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCasualiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
