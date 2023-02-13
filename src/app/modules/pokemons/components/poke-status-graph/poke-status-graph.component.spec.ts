import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeStatusGraphComponent } from './poke-status-graph.component';

xdescribe('PokeStatusGraphComponent', () => {
  let component: PokeStatusGraphComponent;
  let fixture: ComponentFixture<PokeStatusGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeStatusGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeStatusGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
