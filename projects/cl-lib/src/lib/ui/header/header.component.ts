import { Component, Input } from '@angular/core';

@Component({
    selector: 'cl-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
    @Input() subheader: string;
}
