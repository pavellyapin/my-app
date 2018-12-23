import {
    Directive, ElementRef, AfterViewChecked, 
    Input, HostListener
} from '@angular/core';

@Directive({
    selector: '[myMatchHeight]'
})
export class MatchHeightDirective implements AfterViewChecked {
    @Input()
    myMatchHeight: string;

    constructor(private el: ElementRef) {
    }

    @HostListener('window:resize') 
    onResize() {
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    }

    ngAfterViewChecked() {
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    }

    matchHeight(parent: HTMLElement, className: string) {
        const children = parent.getElementsByClassName(className);

        if (!parent) return;
        if (!children) return;

        const itemHeights = Array.from(children)
            .map(x => x.getBoundingClientRect().height);

         const maxHeight = itemHeights.reduce((prev, curr) => {
            return curr > prev ? curr : prev;
        }, 0);

        Array.from(children)
            .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
    }
}