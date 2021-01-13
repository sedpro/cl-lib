import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[cl-template]',
})
export class ClTemplateDirective {
    @Input() set i360Template(val) {
        this.name = val;
    }
    name: string;
    constructor(public template: TemplateRef<any>) {}
}
