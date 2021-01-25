/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import { NgModule } from '@angular/core';

import { ToNumberPipe } from './toNumber.pipe';

const PIPES = [
    ToNumberPipe,
];

@NgModule({
    declarations: PIPES,
    exports: PIPES,
})
export class PipesModule {
}
