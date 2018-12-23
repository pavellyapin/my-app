import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { Entry } from 'contentful';
import { JQ_TOKEN } from '../../../common/jQuery.service';
import { featuredTextAnimation, featuredImageAnimation } from '../../../common/animations';

@Component({
  selector: 'app-design-history',
  templateUrl: './design-history.component.html',
  styleUrls: ['./design-history.component.css'],
  animations: [featuredTextAnimation,featuredImageAnimation]
})
export class DesignHistoryComponent implements OnInit {

  @Input()
  pageContent: Entry<any>;
  validateAgain:boolean = true;
  state:string = 'off';
  isScrolling = true;    

  constructor (@Inject(JQ_TOKEN) private $:any) {    
  }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    var p = this.$(".artsy-row");
    if (this.$(window).scrollTop() >= p.position().top && this.isScrolling) {
      this.state = 'on'
      this.isScrolling = false;     
    } 
    
    if (this.$(window).scrollTop() < 100) {
      this.state = 'off'
      this.isScrolling = true;
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
