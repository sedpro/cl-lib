import { Directive, Input, TemplateRef } from '@angular/core';
export class ClTemplateDirective {
    constructor(template) {
        this.template = template;
    }
    set i360Template(val) {
        this.name = val;
    }
}
ClTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cl-template]',
            },] }
];
ClTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
ClTemplateDirective.propDecorators = {
    i360Template: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91aS91dGlscy90ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlELE1BQU0sT0FBTyxtQkFBbUI7SUFLNUIsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFBRyxDQUFDO0lBSmpELElBQWEsWUFBWSxDQUFDLEdBQUc7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQzs7O1lBTkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2FBQzVCOzs7WUFKMEIsV0FBVzs7OzJCQU1qQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbY2wtdGVtcGxhdGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2xUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgQElucHV0KCkgc2V0IGkzNjBUZW1wbGF0ZSh2YWwpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdmFsO1xuICAgIH1cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuIl19