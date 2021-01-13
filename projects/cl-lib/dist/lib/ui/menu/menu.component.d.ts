/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import { QueryList, TemplateRef } from '@angular/core';
import { ClTemplateDirective } from '../utils/template.directive';
export declare class MenuComponent {
    readonly role = "navigation";
    set templates(templates: QueryList<ClTemplateDirective>);
    leftTemplates: Array<TemplateRef<any>>;
    rightTemplates: Array<TemplateRef<any>>;
    logoTemplate?: TemplateRef<any>;
}
