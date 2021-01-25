/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2021 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */

import { Injectable} from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParameterCodec,
  HttpParams, HttpResponse,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

declare var mainAction: string;

export type HttpFormData = HttpParams | FormData;

@Injectable()
export class XHR {
    request: HttpClient;
    mainAction: string;
    formdata: HttpParams;

    constructor(private http: HttpClient) {
        this.request = http;
        this.mainAction = mainAction;
    }

    post(params: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.formdata = new HttpParams({encoder: new CustomQueryEncoderHelper()});
        this.formdata = this.appendFormData(this.formdata, params, '') as HttpParams;
        const options = {headers};
        return this.request.post(this.mainAction, this.formdata, options)
            .pipe(tap((data: any) => {
                if (data.result !== 'success') {
                    console.log('Error', data.result);
                }
            }));
    }

    private appendFormData(form: HttpFormData, data: any, key: string = ''): HttpFormData {
        switch (true) {
            case data instanceof Array:
                data.forEach((item: any) => {
                    form = this.appendFormData(form, item, `${key}[]`);
                });
                break;
            case typeof data === 'object' && !(data instanceof File):
                Object.keys(data).forEach((dataKey: string) => {
                    form = this.appendFormData(form, data[dataKey], key ? `${key}[${dataKey}]` : `${dataKey}`);
                });
                break;
            default:
                if (form instanceof HttpParams) {
                    form = form.set(key, data as string);
                } else {
                    form.append(key, data);
                }
                break;
        }
        return form;
    }
}

export class CustomQueryEncoderHelper implements HttpParameterCodec {
    decodeKey(key: string): string {
        return key;
    }

    decodeValue(value: string): string {
        return value;
    }
    encodeKey(k: string): string {
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v: string): string {
        return encodeURIComponent(v.toString());
    }
}
