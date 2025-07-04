import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDummy } from './crear-dummy';

describe('CrearDummy', () => {
  let component: CrearDummy;
  let fixture: ComponentFixture<CrearDummy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearDummy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDummy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
