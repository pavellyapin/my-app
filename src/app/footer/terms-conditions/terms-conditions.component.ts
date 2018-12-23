import { Component, OnInit } from '@angular/core';
import { Entry } from '../../../../node_modules/contentful';
import { ContentfulService } from '../../common/contentful.service';

@Component({
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent implements OnInit {

  termsConditionsPageContent: Entry<any>;
  validateAgain:boolean = true;
  
  constructor(private contentfulService: ContentfulService) { }

  loading: boolean = true

  onLoad() {
    this.loading = false; 
  }  

  ngOnInit() {
    this.contentfulService.getTermsConditionsContent()
      .then(items => this.termsConditionsPageContent = items.pop());
  }

  ngDoCheck() {     
    if (this.termsConditionsPageContent && this.validateAgain) {       
      this.validateAgain = !this.validateAgain
    }  
  }

}
