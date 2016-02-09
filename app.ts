import {Component, View, Input} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ControlGroup, AbstractControl,
    FormBuilder, FORM_DIRECTIVES, NgModel} from 'angular2/common';

@Component({
    selector: 'app',
})
@View({
    template: `
        <form>
        <div><input id="happyInput" [ngFormControl]="happy"></div>
        <div id="happyValue">{{happy.value}}</div>
        <div><input id="sadInput" [(ngModel)]="sad"></div>
        <div id="sadValue">{{sad}}</div>
        </form>
      `,
    directives: [FORM_DIRECTIVES, NgModel]
})
export class App {
    @Input()
    sad:string;

    happy:AbstractControl;

    constructor(fb:FormBuilder) {
        let form = fb.group({
            'happy': ['']
        });
        this.happy = form.controls['happy'];
    }
}

bootstrap(App, []);
