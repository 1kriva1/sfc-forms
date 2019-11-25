import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SfcTextInputModule } from './lib/sfc-text-input.module';

@NgModule({
    imports: [BrowserModule, FormsModule, SfcTextInputModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }