import { Component, Input } from '@angular/core';
export class HeaderComponent {
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cl-header',
                template: "<div role=\"heading\" [attr.aria-level]=\"1\">\n    <ng-content></ng-content>\n</div>\n<span *ngIf=\"!!subheader\">{{subheader}}</span>\n",
                styles: [":host{display:block;font-family:Open Sans,sans-serif;margin-bottom:32px;margin-top:32px}:host [role=heading]{font-size:22px}:host [aria-level=\"1\"]{font-weight:700}:host>span{color:#75767a;display:block;font-size:11px;font-weight:400;position:relative;top:5px;white-space:pre-line}"]
            },] }
];
HeaderComponent.propDecorators = {
    subheader: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9zcmMvIiwic291cmNlcyI6WyJsaWIvdWkvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLGVBQWU7OztZQUwzQixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHFKQUFzQzs7YUFFekM7Ozt3QkFFSSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NsLWhlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5sZXNzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgc3ViaGVhZGVyOiBzdHJpbmc7XG59XG4iXX0=