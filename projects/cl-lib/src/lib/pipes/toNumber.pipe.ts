/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toNumber'
})
export class ToNumberPipe implements PipeTransform {
    transform(value: any, digits= 0): any {
        if (value === null) {
            return '-';
        } else if (typeof value === 'number') {
            return value.toFixed(digits);
        } else {
            return value;
        }
    }
}
