import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatoshiComponent } from './satoshi.component';

describe('SatoshiComponent', () => {
  let component: SatoshiComponent;
  let fixture: ComponentFixture<SatoshiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatoshiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatoshiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
