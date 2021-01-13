/**
 * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
 *
 * Licensed under CLOUD LINUX LICENSE AGREEMENT
 * http://cloudlinux.com/docs/LICENSE.TXT
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [
    MenuComponent,
  ],
    imports: [
        BrowserModule,
        CommonModule,
        MatMenuModule,
        MatRippleModule,
        MaterialModule,
        FormsModule,
    ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule {
}
