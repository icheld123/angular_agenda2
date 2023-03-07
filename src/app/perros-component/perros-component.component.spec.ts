import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerrosComponentComponent } from './perros-component.component';

describe('PerrosComponentComponent', () => {
  let component: PerrosComponentComponent;
  let fixture: ComponentFixture<PerrosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerrosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerrosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
