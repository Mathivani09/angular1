import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathiComponent } from './mathi.component';

describe('MathiComponent', () => {
  let component: MathiComponent;
  let fixture: ComponentFixture<MathiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
