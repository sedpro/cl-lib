/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2019 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */

import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface InternalStateType {
    [key: string]: any;
}

@Injectable()
export class AppState {
    public onChange: Observable<any>;
    private changeEvent = new Subject<any>();

    constructor() {
        this.onChange = this.changeEvent.asObservable();
    }

    private _state: InternalStateType = {}; // tslint:disable-line:variable-name

    get state(): InternalStateType {
        return this._state;
    }

    get(prop: string, defaultValue?: any): string {
        return this.state.hasOwnProperty(prop) ? this.state[prop] : defaultValue;
    }

    exist(prop?: any): boolean {
        return this.state.hasOwnProperty(prop);
    }

    remove(prop: string): void {
        if (this.exist(prop)) {
            delete this.state[prop];
        }
    }

    set(prop: string, value?: any): void {
        // internally mutate our state
        if (typeof value !== 'undefined') {
            this._state[prop] = value;
        } else {
            if (this.exist(prop)) {
                delete this._state[prop];
            }
        }
        this.changeEvent.next();
    }
}
