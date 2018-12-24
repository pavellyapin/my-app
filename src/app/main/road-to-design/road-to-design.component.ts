import { Component, OnInit, Input, HostListener, Inject } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../common/contentful.service';
import { sortBanners } from '../../common/pipes';
import { JQ_TOKEN } from '../../common/jQuery.service';
import { featuredTextAnimation } from '../../common/animations';

@Component({
  selector: 'road-to-design',
  templateUrl: './road-to-design.component.html'
})
export class RoadToDesignComponent implements OnInit {

  constructor(private contentfulService: ContentfulService,@Inject(JQ_TOKEN) private $:any) { }

  @Input()
  pageContent:Entry<any>
  validateAgain:boolean = true;
  componentsOfApp:Entry<any>
  isScrolling = true;   
  
  ngOnInit() {
    this.contentfulService.getObjectLists()
    .then(lists => this.componentsOfApp = lists.filter(list=>list.fields.type === 'componentsOfApp').pop())
    if (this.componentsOfApp) {
      this.componentsOfApp.fields.list.sort(sortBanners) 
    } 
  }

  
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    var p = this.$(".compareTo");
   if (this.$(window).scrollTop() >= p.position().top && this.isScrolling) {
    for (let index of this.componentsOfApp.fields.list) { 
        this.$("." + index.fields.order + "-item").animate({
          opacity: 1,
          top: "+=50"
        }, 500, function() { 
        }).delay( 500 ); 
    }
      this.isScrolling = false;     
    } 
  } 
  
  ngDoCheck() { 
    if (this.pageContent && this.validateAgain) {
      this.validateAgain = !this.validateAgain
    }  
  }
}
