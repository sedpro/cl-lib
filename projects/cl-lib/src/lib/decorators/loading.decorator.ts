/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
export function loading(
    target: object, propertyKey: string, descriptor: any): TypedPropertyDescriptor<any> {

    const originalMethod = descriptor.value;

    descriptor.value = async function(...args: any[]) {
        this.loading = true;
        let result: Promise<any> = null;
        try {
            result = await originalMethod.apply(this, args);
        } catch (e) {
            this.loading = false;
            throw e;
        } finally {
            this.loading = false;
        }
        return result;
    };

    return descriptor;
}
