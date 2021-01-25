/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeInputDirective } from './sanitize-input.directive';
import { ClickOutsideDirective } from './click-outside.directive';

const DIRECTIVES = [
    ClickOutsideDirective,
    SanitizeInputDirective,
];
@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [...DIRECTIVES],
    exports: [...DIRECTIVES]
})
export class DirectivesModule {
}
