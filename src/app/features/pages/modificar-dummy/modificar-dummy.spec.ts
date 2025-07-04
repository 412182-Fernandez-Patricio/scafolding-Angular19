import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDummy } from './modificar-dummy';

describe('ModificarDummy', () => {
  let component: ModificarDummy;
  let fixture: ComponentFixture<ModificarDummy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarDummy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarDummy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
