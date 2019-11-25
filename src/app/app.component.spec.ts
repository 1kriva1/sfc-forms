import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CommonModule } from '@angular/common';
import { TextInputComponent } from "./lib/sfc-text-input/sfc-text-input.component";

describe("Component: AppComponent", () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule],
            declarations: [AppComponent, TextInputComponent],
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(AppComponent);
            component = fixture.componentInstance;
        });
    }));
    
    it("should be defined ", async(() => {
        expect(component).toBeTruthy();
    }))
});