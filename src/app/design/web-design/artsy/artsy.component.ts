import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { Entry } from 'contentful';
import { JQ_TOKEN } from '../../../common/jQuery.service';
import { featuredTextAnimation, featuredImageAnimation } from '../../../common/animations';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-artsy',
  templateUrl: './artsy.component.html',
  styleUrls: ['./artsy.component.css'],
  animations: [featuredTextAnimation,featuredImageAnimation]
})
export class ArtsyComponent implements OnInit {

  @Input()
  pageContent: Entry<any>;
  @Input()
  banners: Entry<any>;
  validateAgain:boolean = true;
  state:string = 'off';
  isScrolling = true;   
  showSVG:boolean = true; 

  constructor (@Inject(JQ_TOKEN) private $:any,private router:Router) {    
  }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    var p = this.$(".responsiveinfo-row");
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
    if((typeof window !== "undefined") ? window.innerWidth < 700 : false) {
      this.showSVG = false;
    }
  }

  navigate(){
    this.router.navigate(['/ecommerce'])
  }

  ngDoCheck() { 
    if (this.pageContent && this.validateAgain) {
      this.validateAgain = !this.validateAgain
    }  
  }

}
