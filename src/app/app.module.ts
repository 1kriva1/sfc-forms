import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TextInputComponent } from './lib/sfc-text-input/sfc-text-input.component'

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, TextInputComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }