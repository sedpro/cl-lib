/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiSelectComponent } from './ui-select.component';
import { MaterialModule } from '../../shared/material.module';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
    imports: [
        FormsModule,
        MaterialModule,
        CommonModule,
        DirectivesModule,
        PipesModule,
    ],
    declarations: [UiSelectComponent],
    exports: [UiSelectComponent],
})
export class UiSelectModule {
}
