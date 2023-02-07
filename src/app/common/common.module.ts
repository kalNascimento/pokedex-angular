import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseEndpointInterceptor } from './interceptors/base-endpoint.interceptor';

@NgModule({
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BaseEndpointInterceptor,
			multi: true
		}
	],
	declarations: [],
	imports: [CommonModule, HttpClientModule]
})
export class AppCommonModule {}
