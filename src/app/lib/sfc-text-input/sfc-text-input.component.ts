import { Component, OnInit, Input } from '@angular/core';
 
@Component({
    selector: 'sfc-text-input',
    templateUrl: './sfc-text-input.component.html',
    styleUrls: ['./sfc-text-input.component.css']
})
export class TextInputComponent implements OnInit{

    @Input()
    icon:string;

    constructor(){

    }

    ngOnInit(): void {
        
    } 

    get classes(){
        const classes = {}
        if(this.icon){
            classes['fa-' + this.icon] = true;
        }
        return classes;
    }
}