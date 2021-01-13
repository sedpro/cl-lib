import { NgModule } from '@angular/core';
import { HeaderComponent } from './ui/header/header.component';
import { ClTemplateDirective } from './ui/utils/template.directive';
import { CommonModule } from '@angular/common';
const components = [
    HeaderComponent,
    ClTemplateDirective
];
export class ClLibModule {
}
ClLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ...components,
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    ...components,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2wtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9zcmMvIiwic291cmNlcyI6WyJsaWIvY2wtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsTUFBTSxVQUFVLEdBQUc7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtDQUNwQixDQUFDO0FBYUYsTUFBTSxPQUFPLFdBQVc7OztZQVh2QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLEdBQUcsVUFBVTtpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxVQUFVO2lCQUNkO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi91aS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi91aS91dGlscy90ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgY29tcG9uZW50cyA9IFtcbiAgSGVhZGVyQ29tcG9uZW50LFxuICBDbFRlbXBsYXRlRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENsTGliTW9kdWxlIHsgfVxuIl19