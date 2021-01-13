import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[clTemplate]',
})
export class ClTemplateDirective {
    @Input() set i360Template(val) {
        this.name = val;
    }
    name: string;
    constructor(public template: TemplateRef<any>) {}
}
