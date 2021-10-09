import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EminemComponent } from './eminem.component';

describe('EminemComponent', () => {
  let component: EminemComponent;
  let fixture: ComponentFixture<EminemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EminemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EminemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
