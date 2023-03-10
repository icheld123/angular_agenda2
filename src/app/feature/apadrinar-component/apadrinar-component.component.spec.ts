import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApadrinarComponent } from './apadrinar-component.component';

describe('ApadrinarComponent', () => {
  let component: ApadrinarComponent;
  let fixture: ComponentFixture<ApadrinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApadrinarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApadrinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
