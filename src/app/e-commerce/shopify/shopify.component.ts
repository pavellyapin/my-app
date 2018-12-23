import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../../../../node_modules/contentful';
import { ContentfulService } from '../../common/contentful.service';

@Component({
  selector: 'app-shopify',
  templateUrl: './shopify.component.html',
  styleUrls: ['./shopify.component.css']
})
export class ShopifyComponent implements OnInit {

  @Input()
  pageContent: Entry<any>;
  eCommBaners: Entry<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {

    this.contentfulService.getObjectLists()
    .then(
      lists => {
      this.eCommBaners = lists.filter(list=>list.fields.type === 'eCommBanner').pop()
      }
  )
  }

  ngDoCheck() { 
    if (this.pageContent) {       
    }  
  }

}
