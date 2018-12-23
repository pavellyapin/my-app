import { Component, OnInit, Input, HostListener, Inject } from '@angular/core';
import { Entry } from 'contentful';
import { featuredTextAnimation, featuredImageAnimation } from '../../common/animations';
import { JQ_TOKEN } from '../../common/jQuery.service';

@Component({
  selector: 'featured-client',
  templateUrl: './featured-client.component.html',
  styleUrls: ['./featured-client.component.css'],
  animations: [featuredTextAnimation,featuredImageAnimation]
})
export class FeaturedClientComponent implements OnInit {

  @Input()
  pageContent: Entry<any>;
  @Input()
  clientPoints: Entry<any>
  validateAgain:boolean = true;
  state:string = 'off';
  isScrolling = true;    

  constructor (@Inject(JQ_TOKEN) private $:any) {    
  }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    var p = this.$(".aboutContent");
    if (this.$(window).scrollTop() >= p.position().top && this.isScrolling) {
      this.state = 'on'
      this.isScrolling = false;     
    } 
  } 

  ngOnInit() {
  }

  ngDoCheck() { 
    if (this.pageContent && this.validateAgain) {
      this.validateAgain = !this.validateAgain
    }  
  }
}
