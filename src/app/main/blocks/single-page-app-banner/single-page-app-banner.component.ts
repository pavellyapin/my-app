import { Component, OnInit } from '@angular/core';
import { Entry } from '../../../../../node_modules/contentful';
import { ContentfulService } from '../../../common/contentful.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'spa-banner',
  templateUrl: './single-page-app-banner.component.html',
  styleUrls: ['./single-page-app-banner.component.css']
})
export class SinglePageAppBannerComponent implements OnInit {

  spaBanners: Entry<any>;
  validateAgain:boolean = true;
  
  constructor(private contentfulService: ContentfulService,private router:Router) { }

  loading: boolean = true
  showSVG: boolean = true
  onLoad() {
    this.loading = false;    
  }

  ngOnInit() {    
    if((typeof window !== "undefined") ? window.innerWidth < 700 : false) {
      this.showSVG = false;
    }
      this.contentfulService.getObjectLists()
      .then(
        lists => {
        this.spaBanners = lists.filter(list=>list.fields.type === 'spaBanners').pop()
        }
    )

  }

  navigate(){
    this.router.navigate(['/services'])
  }

  ngDoCheck() { 
    if (this.spaBanners && this.validateAgain) { 
      this.validateAgain = !this.validateAgain
    }  
  }

}
