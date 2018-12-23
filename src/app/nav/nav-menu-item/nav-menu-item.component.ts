import { Component, OnInit, Input, Inject } from '@angular/core';
import { Entry } from '../../../../node_modules/contentful';
import { GoogleAnalyticsAPI } from '../../common/GoogleAnalytics.service.';
import { dropDownAnimation } from '../../common/animations';
import { JQ_TOKEN } from '../../common/jQuery.service';

declare let ga: Function;

@Component({
  selector: 'nav-menu-item',
  templateUrl: './nav-menu-item.component.html',
  styleUrls: ['./nav-menu-item.component.css'],
  animations: [dropDownAnimation]
})
export class NavMenuItemComponent implements OnInit {

  @Input() menuItem:Entry<any>;    
    routerLink:string;
    options:Entry<any>[]
    showArow:boolean = false;
    state:string = 'off'
    itemState:boolean = false
    expandState:boolean = false
    analyticsSent:boolean = false;

    constructor (private ga:GoogleAnalyticsAPI,@Inject(JQ_TOKEN) private $:any) { }

    ngOnInit(): void {        
        this.options = this.menuItem.fields.subOptions
        this.routerLink = this.menuItem.fields.path;
        if (this.options) {
            this.showArow = false;
        }
    }

    clickEvent() {
        this.state = 'off'
        if(window.innerWidth < 980) {
            this.$(".my-nav-nav").slideToggle(200);
        }        
    }

    mouseEnter(div:string){
        if (!this.analyticsSent) {
            this.ga.registerEvent('hover',this.menuItem.fields.name)
            this.analyticsSent = !this.analyticsSent
        }                
        ga('set', 'page', '/new-page.html');
        if (div === 'item') {
            this.itemState = true
        } else {
            this.expandState = true
        }
        this.state = 'on'
     }
  
     mouseLeave(div:string){
        if (div === 'item') {
            this.itemState = false
        } else {
            this.expandState = false
        }
        setTimeout(()=>{
             if (!this.expandState && !this.itemState) {
                 this.state = 'off'
             } 
         }, 100)        
     }
}
