/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'cl-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.less'],
})
export class SearchBoxComponent {
    @Input() searchText = '';
    @Input() placeholder = '';
    @Output() searchTextChange = new EventEmitter<string>();

    onSearchTextChanged(text: string): void {
        this.searchText = text;
        this.searchTextChange.emit(this.searchText);
    }

    onCloseClick(): void {
        this.searchText = '';
        this.searchTextChange.emit(this.searchText);
    }
}
