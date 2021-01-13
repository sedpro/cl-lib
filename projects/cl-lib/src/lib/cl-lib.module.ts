import { NgModule } from '@angular/core';
import { HeaderComponent } from './ui/header/header.component';
import { ClTemplateDirective } from './ui/utils/template.directive';
import { CommonModule } from '@angular/common';

const components = [
  HeaderComponent,
  ClTemplateDirective
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components,
  ]
})
export class ClLibModule { }
