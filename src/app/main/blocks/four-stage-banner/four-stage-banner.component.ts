import { Component} from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../../common/contentful.service';
import { sortBanners } from '../../../common/pipes';
import { ActivatedRouteSnapshot, Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'four-stage-banner',
  templateUrl: './four-stage-banner.component.html',
  styleUrls: ['./four-stage-banner.component.css']
})
export class FourStageBannerComponent {

  validateAgain:boolean = true;
  showSVG:boolean = true;
  
  constructor(private contentfulService: ContentfulService,private router:Router) { }

  stageBanners:Entry<any>

  ngOnInit() {
    if((typeof window !== "undefined") ? window.innerWidth < 700 : false) {
      this.showSVG = false;
    }
    this.contentfulService.getObjectLists()
      .then(lists => this.stageBanners = lists.filter(list=>list.fields.type === 'bannerList').pop())
      if (this.stageBanners) {
        this.stageBanners.fields.list.sort(sortBanners) 
      }      
  }

  ngDoCheck() {  
    if (this.stageBanners && this.validateAgain) { 
      this.validateAgain = !this.validateAgain
    }  
  }

  navigate(){
    this.router.navigate(['/contact'])
  }
}
