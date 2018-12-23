import { Component, Inject} from "@angular/core";
import { Entry } from "contentful";
import { GoogleAnalyticsAPI } from "../common/GoogleAnalytics.service.";
import { ContentfulService } from "../common/contentful.service";
import { sortMenuItem } from "../common/pipes";
import { JQ_TOKEN } from "../common/jQuery.service";

@Component({
    selector : 'top-menu',
    templateUrl : './menu.component.html',
    styleUrls: ['./menu.css']    
})

export class MenuComponent {

    menuItems: Entry<any>[] = [];
    filteredMenuItems: Entry<any>[] = [];
    analyticsSent:boolean = false

    constructor(private contentfulService: ContentfulService, private ga:GoogleAnalyticsAPI,@Inject(JQ_TOKEN) private $:any) { }

    ngOnInit() {
      this.contentfulService.getMenuItems()
        .then(items => this.menuItems = items);
    }

    clickEvent() {
        if(window.innerWidth < 980) {
            this.$(".my-nav-menu").slideToggle(200);
        }        
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

    toggleMenu() {
        this.$(".my-nav-menu").slideToggle(500);
    }

}

