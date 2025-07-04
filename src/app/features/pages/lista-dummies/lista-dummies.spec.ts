import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDummies } from './lista-dummies';

describe('ListaDummies', () => {
  let component: ListaDummies;
  let fixture: ComponentFixture<ListaDummies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDummies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDummies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
