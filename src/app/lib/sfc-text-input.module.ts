import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './sfc-text-input/sfc-text-input.component';
import { InputRefDirective } from './common/input-ref.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [TextInputComponent, InputRefDirective],
    exports: [TextInputComponent, InputRefDirective]
})
export class SfcTextInputModule { }