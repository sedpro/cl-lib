/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'cl-table-loader',
    templateUrl: './table-loader.component.html',
    styleUrls: ['./table-loader.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableLoaderComponent {
    @Input() rows: number;
    @Input() cols: number;
}
