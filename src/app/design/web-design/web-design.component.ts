import { Component, OnInit, HostListener } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../common/contentful.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.css']
})

export class WebDesignComponent implements OnInit {

  designPageContent: Entry<any>;
  spaBanners: Entry<any>;
  artsyBanners: Entry<any>;
  validateAgain:boolean = true;
  
  constructor(private contentfulService: ContentfulService,private router:Router) { }

  loading: boolean = true
  showMobile: boolean = false
  onLoad() {
    this.loading = false;    
  }

  ngOnInit() {

    if((typeof window !== "undefined") ? window.innerWidth < 700 : false) {
      this.showMobile = true;
    }
    this.contentfulService.getDesignPageContent()
      .then(items => this.designPageContent = items.pop());
      this.contentfulService.getObjectLists()
      .then(
        lists => {
        this.spaBanners = lists.filter(list=>list.fields.type === 'spaBanners').pop()
        this.artsyBanners = lists.filter(list=>list.fields.type === 'artsyBanners').pop()
        }
    )

  }

  navigate(){
    this.router.navigate(['/ecommerce'])
  }

  ngDoCheck() { 
    if (this.designPageContent && this.validateAgain) { 
      this.validateAgain = !this.validateAgain
    }  
  }
}
