/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'cl-select',
    templateUrl: './ui-select.component.html',
    styleUrls: ['./ui-select.component.less'],
})
export class UiSelectComponent {
    opened = false;
    formattedOptions: object = {};

    @Input() set options(value) {
        if (typeof(this.options) === 'object') {
            this.formattedOptions = value;
        } else {
            value.forEach(i => this.formattedOptions[i] = i);
        }
    }
    @Input() selected = '';
    @Input() label = '';
    @Input() hideSelectedValue = false;
    @Output() change: EventEmitter<any> = new EventEmitter();

    toggle() {
        this.opened = !this.opened;
    }

    close() {
        this.opened = false;
    }

    selectValue(value) {
        if (value !== this.selected) {
            this.selected = value;
            this.change.emit(value);
            this.close();
        }
    }
}
