/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import { Component, Input } from '@angular/core';

@Component({
    selector: 'cl-tabs',
    template: `
        <div class="flexer flex-nowrap">
           <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./tabs.component.less'],
})

export class TabsComponent {
    @Input('tabs') tabs;
}
