/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../../directives/directives.module';
import { SearchBoxComponent } from './search-box.component';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        DirectivesModule,
    ],
    declarations: [SearchBoxComponent],
    exports: [SearchBoxComponent],
})
export class SearchBoxModule {
}
