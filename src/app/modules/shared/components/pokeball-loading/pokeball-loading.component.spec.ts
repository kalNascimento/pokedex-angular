import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeballLoadingComponent } from './pokeball-loading.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('PokeballLoadingComponent', () => {
	let component: PokeballLoadingComponent;
	let fixture: ComponentFixture<PokeballLoadingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokeballLoadingComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(PokeballLoadingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
