import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../common/contentful.service';
import { mainPromoTextAnimation } from '../common/animations';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css'],
  animations : [mainPromoTextAnimation]
})
export class ECommerceComponent implements OnInit {

  eCommercePageContent: Entry<any>;
  seoHelp: Entry<any>;
  validateAgain:boolean = true;
  
  constructor(private contentfulService: ContentfulService) { }

  loading: boolean = true
  state:string = 'off'
  showMobile: boolean = false

  onLoad() {
    this.loading = false;  
    this.state = "on" 
  }  

  ngOnInit() {

    if((typeof window !== "undefined") ? window.innerWidth < 700 : false) {
      this.showMobile = true;
    }

    this.contentfulService.getECommercePageContent()
      .then(items => this.eCommercePageContent = items.pop());

      this.contentfulService.getObjectLists()
      .then(
        lists => {
        this.seoHelp = lists.filter(list=>list.fields.type === 'seoHelp').pop()
        }
    )
  }

  ngDoCheck() {     
    if (this.eCommercePageContent && this.validateAgain) {       
      this.validateAgain = !this.validateAgain
    }  
  }

}
