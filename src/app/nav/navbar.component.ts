import { Component, Input,HostListener, Inject } from '@angular/core';
import { navbarTransition} from '../common/animations';
import { JQ_TOKEN } from '../common/jQuery.service';
import { ContentfulService } from '../common/contentful.service';
import { GoogleAnalyticsAPI } from '../common/GoogleAnalytics.service.';
import { Entry } from '../../../node_modules/contentful';
import { sortMenuItem } from '../common/pipes';

@Component({  
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./navbar.css'],  
  animations: [navbarTransition]
})

export class NavBarComponent {

  state:string = 'top'
  isScrolling = true; //a variable to stop the .scrollTop >= 120 from repeating  
  menuItems: Entry<any>[] = [];
  filteredMenuItems: Entry<any>[] = [];
  analyticsSent:boolean = false

  constructor (@Inject(JQ_TOKEN) private $:any,private contentfulService: ContentfulService, private ga:GoogleAnalyticsAPI) {
    
}

  ngOnInit() {
    this.contentfulService.getMenuItems()
      .then(items => this.menuItems = items);
  }

    ngDoCheck() {  
        this.filteredMenuItems = this.menuItems.filter(item => !item.fields.parent) 
        this.filteredMenuItems.sort(sortMenuItem)         
    } 
    
    hoverAnalytics () {
        if (!this.analyticsSent) {
            this.ga.registerEvent('hover','Contact')
            this.analyticsSent = !this.analyticsSent
        } 
    }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.$(window).scrollTop() >= 120 && this.isScrolling) {
      this.$(".sticky-bar").slideDown(500);
      this.isScrolling = false;
      this.state = 'bottom'
    } else if (this.$(window).scrollTop() < 120 && !this.isScrolling) {
      this.$(".sticky-bar").slideUp(500);
      this.isScrolling = true;
      this.state = 'top'
    }
  }
  toggleMenu() {
    this.$(".my-nav-nav").slideToggle(500);
}
}