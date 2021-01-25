/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableLoaderComponent } from './table-loader.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
    imports: [
        CommonModule,
        NgxSkeletonLoaderModule
    ],
    declarations: [TableLoaderComponent],
    exports: [TableLoaderComponent],
})
export class TableLoaderModule {
}
