/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import {
  Component,
  ContentChildren,
  HostBinding,
  QueryList,
  TemplateRef
} from '@angular/core';
import { ClTemplateDirective } from '../utils/template.directive';

@Component({
  selector: 'cl-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {
  @HostBinding('attr.role') readonly role = 'navigation';

  @ContentChildren(ClTemplateDirective, {descendants: true})
  set templates(templates: QueryList<ClTemplateDirective>) {
    this.leftTemplates.length = 0;
    this.rightTemplates.length = 0;
    this.logoTemplate = undefined;
    templates.forEach(template => {
      switch (template.name) {
        case 'right':
          this.rightTemplates.push(template.template);
          break;
        case 'logo':
          this.logoTemplate = template.template;
          break;
        default:
          this.leftTemplates.push(template.template);
          break;
      }
    });
  }
  leftTemplates: Array<TemplateRef<any>> = [];
  rightTemplates: Array<TemplateRef<any>> = [];
  logoTemplate?: TemplateRef<any>;
}
