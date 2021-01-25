/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TabsComponent } from './tabs.component';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [TabsComponent],
    exports: [TabsComponent],
})
export class TabsModule {
}
