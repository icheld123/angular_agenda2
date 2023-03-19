import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeluditosComponent } from './peluditos-component.component';

describe('PeluditosComponent', () => {
  let component: PeluditosComponent;
  let fixture: ComponentFixture<PeluditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeluditosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeluditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
