import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../common/contentful.service';
import { Entry } from 'contentful';

@Component({
  templateUrl: './big-data.component.html',
  styleUrls: ['./big-data.component.css']
})
export class BigDataComponent {

  constructor (private contentfulService: ContentfulService)
  {}
  validateAgain:boolean = true;
  showSVG:boolean = true;
  bigDataPageContent: Entry<any>;
  cmsInfo:Entry<any>
  analyticsInfo:Entry<any>
  
  ngOnInit() {
    if((typeof window !== "undefined") ? window.innerWidth < 700 : false) {
      this.showSVG = false;
    }
    this.contentfulService.getBigDataPageContent()
      .then(items => this.bigDataPageContent = items.pop());
      this.contentfulService.getObjectLists()
      .then(lists => {this.cmsInfo = lists.filter(list=>list.fields.type === 'cmsInfo').pop(),
                      this.analyticsInfo = lists.filter(list=>list.fields.type === 'analyticsInfo').pop()}
                   )
  }

  ngDoCheck() { 
    if (this.bigDataPageContent && this.validateAgain) {
      this.validateAgain = !this.validateAgain
    }  
  }
  loading: boolean = true
  state:string = 'off'

    onLoad() {
      this.loading = false;  
      this.state = "on" 
    }


}
