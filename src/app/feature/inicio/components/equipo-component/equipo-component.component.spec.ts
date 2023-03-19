import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoComponentComponent } from './equipo-component.component';

describe('EquipoComponentComponent', () => {
  let component: EquipoComponentComponent;
  let fixture: ComponentFixture<EquipoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
