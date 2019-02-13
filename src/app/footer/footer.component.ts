import { Component } from "@angular/core";
import { ContentfulService } from "../common/contentful.service";
import { Entry } from "../../../node_modules/contentful";
import { DatePipe } from "../../../node_modules/@angular/common";

@Component ({
    templateUrl: './footer.component.html',
    selector : 'main-footer',
    styleUrls : ['./main-footer.css']

})

export class FooterComponent {
    constructor (private contentfulService: ContentfulService)
      {}
      validateAgain:boolean = true;
      showMap:boolean = false;
      blogPosts: Entry<any>[];
      footerContent: Entry<any>;
      ourPromises: Entry<any>;
      siteMap: Entry<any>;
     
      ngOnInit() {
        this.contentfulService.getBlogPosts()
          .then(items => this.blogPosts = items);

        this.contentfulService.getFooterContent()
          .then(items => this.footerContent = items.pop());

          this.contentfulService.getObjectLists()
          .then(
            lists => {
            this.ourPromises = lists.filter(list=>list.fields.type === 'aboutFooter').pop(),
            this.siteMap = lists.filter(list=>list.fields.type === 'sitemap').pop()
            }
        )
      }

      ngDoCheck() { 
        if (this.blogPosts && this.validateAgain) {
          this.validateAgain = !this.validateAgain
        }  
      }

      siteMapClick() {
        let scrollToTop = window.setInterval(() => {
          let pos = window.pageYOffset;
          if (pos > 0) {
              window.scrollTo(0, pos - 1000); // how far to scroll on each step
          } else {
              window.clearInterval(scrollToTop);
          }
      }, 5);
      }
}