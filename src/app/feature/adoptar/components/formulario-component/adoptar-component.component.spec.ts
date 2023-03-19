import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptarComponent } from './adoptar-component.component';

describe('FormularioComponentComponent', () => {
  let component: AdoptarComponent;
  let fixture: ComponentFixture<AdoptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
