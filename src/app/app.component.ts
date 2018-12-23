import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsAPI } from './common/GoogleAnalytics.service.';

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <top-menu style = "position:absolute;z-index: 500"></top-menu> 
    <div>
    <router-outlet (activate)="onActivate($event)"></router-outlet>
    </div> 
    <main-footer></main-footer>
  `
})

export class AppComponent {

  prod_mode: boolean = false

  constructor(private router: Router, private ga:GoogleAnalyticsAPI) {
    this.router.events.subscribe(event => {
     if (event instanceof NavigationEnd) {
       if (this.prod_mode) {
        this.ga.registerPageView(event.urlAfterRedirects);
       }       
     }
   });
 }

 onActivate(event) {
  let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 1000); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 5);
}
}
