import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaServicioComponent } from './venta-servicio.component';

describe('VentaServicioComponent', () => {
  let component: VentaServicioComponent;
  let fixture: ComponentFixture<VentaServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
