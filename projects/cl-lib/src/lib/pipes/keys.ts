import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
    transform(value: object, args?: string[]): any {
        const keys: any[] = [];
        for (const key of Object.keys(value)) {
            keys.push({key, value: value[key]});
        }
        return keys;
    }
}
