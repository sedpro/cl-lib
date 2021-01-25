/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[clnSanitizeInput]'
})
export class SanitizeInputDirective {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('change') onInputChanged(): void {
        const text = this.elRef.nativeElement.value;
        if (text === null || text === '') {
            return;
        }

        this.renderer.setProperty(this.elRef.nativeElement, 'value', text.replace(/[^\u0020-\uDBBF]/g, ''));
    }
}
