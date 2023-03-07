import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatosComponentComponent } from './gatos-component.component';

describe('GatosComponentComponent', () => {
  let component: GatosComponentComponent;
  let fixture: ComponentFixture<GatosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
