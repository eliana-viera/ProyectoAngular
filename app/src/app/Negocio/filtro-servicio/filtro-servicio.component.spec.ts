import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroServicioComponent } from './filtro-servicio.component';

describe('FiltroServicioComponent', () => {
  let component: FiltroServicioComponent;
  let fixture: ComponentFixture<FiltroServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
