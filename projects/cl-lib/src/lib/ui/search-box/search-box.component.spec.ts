import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SearchBoxComponent } from './search-box.component';

describe('SearchBoxComponent', () => {
    let component: SearchBoxComponent;
    let fixture: ComponentFixture<SearchBoxComponent>;
    let de: DebugElement;
    let inputEl: HTMLInputElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchBoxComponent],
            imports: [FormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(SearchBoxComponent);
        de = fixture.debugElement;
        inputEl = de.query(By.css('.search-box__input')).nativeElement;
        component = fixture.componentInstance;
        fixture.detectChanges();
        (<any> window).fixture = fixture;
    });

    it('should emit event "changeText" with params "new search" when text "new search" was set', () => {
        spyOn(component.searchTextChange, 'emit');
        inputEl.value = 'new search';
        inputEl.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        expect(component.searchTextChange.emit).toHaveBeenCalledWith('new search');
    });

    it('should clear text when text close button was clicked', async () => {
        inputEl.value = 'new search';
        inputEl.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        const closeEl = de.query(By.css('.search-box__close')).nativeElement;
        closeEl.click();
        await fixture.whenStable();
        fixture.detectChanges();
        expect(inputEl.value).toEqual('');
    });

    it('should emit event "changeText" with params "" when text close button was clicked', async () => {
        inputEl.value = 'new search';
        inputEl.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        spyOn(component.searchTextChange, 'emit');
        const closeEl = de.query(By.css('.search-box__close')).nativeElement;
        closeEl.click();
        await fixture.whenStable();
        fixture.detectChanges();
        expect(component.searchTextChange.emit).toHaveBeenCalledWith('');
    });
});
