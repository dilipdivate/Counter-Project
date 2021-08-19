import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppHomeComponent } from './app-home/app-home.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        AppHomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        CommonModule

    ],
    providers: [

    ],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule {
}
