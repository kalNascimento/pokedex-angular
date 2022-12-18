import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeballLoadingComponent } from './pokeball-loading.component';

describe('PokeballLoadingComponent', () => {
  let component: PokeballLoadingComponent;
  let fixture: ComponentFixture<PokeballLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeballLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeballLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
