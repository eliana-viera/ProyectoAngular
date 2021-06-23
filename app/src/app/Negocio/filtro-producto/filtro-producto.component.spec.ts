import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroProductoComponent } from './filtro-producto.component';

describe('FiltroProductoComponent', () => {
  let component: FiltroProductoComponent;
  let fixture: ComponentFixture<FiltroProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
