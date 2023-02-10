import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsComponent } from './pokemon-details.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

xdescribe('PokemonDetailsComponent', () => {
	let component: PokemonDetailsComponent;
	let fixture: ComponentFixture<PokemonDetailsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokemonDetailsComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(PokemonDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
