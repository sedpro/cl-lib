import { SanitizeInputDirective } from './sanitize-input.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
    template: `<input type="text" clnSanitizeInput>`
})
class TestSanitizeInputDirectiveComponent {
}

describe('SanitizeInputDirective', () => {
    let component: TestSanitizeInputDirectiveComponent;
    let fixture: ComponentFixture<TestSanitizeInputDirectiveComponent>;
    let inputEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SanitizeInputDirective, TestSanitizeInputDirectiveComponent]
        });

        fixture = TestBed.createComponent(TestSanitizeInputDirectiveComponent);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('input'));
        fixture.detectChanges();
    });

    it('should not change normal text', () => {
        inputEl.nativeElement.value = 'normal text';
        inputEl.triggerEventHandler('change', null);
        fixture.detectChanges();

        expect(inputEl.nativeElement.value).toEqual('normal text');
    });

    it('should remove invalid text', () => {
        inputEl.nativeElement.value = 'invalid � text';
        inputEl.triggerEventHandler('change', null);
        fixture.detectChanges();

        expect(inputEl.nativeElement.value).toEqual('invalid  text');
    });
});
