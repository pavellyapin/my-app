import {Component, Inject} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Entry } from '../../../node_modules/contentful';
import { ContentfulService } from '../common/contentful.service';

@Component ({
    templateUrl:'./contact-page.component.html',
    styleUrls: ['./contact-page.css']
})

export class ContactPageComponent {   

    serviceBundles:Entry<any>
    validateAgain:boolean = true;
    showSVG:boolean = true;
    contactPageContent: Entry<any>;
     
    constructor(private contentfulService: ContentfulService) { }
  
    ngOnInit() {
      if((typeof window !== "undefined") ? window.innerWidth < 700 : false) {
        this.showSVG = false;
      }    
      this.contentfulService.getObjectLists()
      .then(
        lists => {
        this.serviceBundles = lists.filter(list=>list.fields.type === 'serviceBundles').pop()
        }        
      ) 
      this.contentfulService.getContactPageContent()
      .then(items => this.contactPageContent = items.pop());
    }
  
    ngDoCheck() {  
      if (this.serviceBundles && this.validateAgain) {       
        this.validateAgain = !this.validateAgain
      }  
    } 
}

