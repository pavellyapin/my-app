import { Component, Input, Inject } from '@angular/core';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { mainPromoTextAnimation } from '../../common/animations';
import { JQ_TOKEN } from '../../common/jQuery.service';


@Component({
  selector: 'main-promo',
  templateUrl:'./main-promo.component.html',
  styleUrls: ['./main-promo.css'],
  animations : [mainPromoTextAnimation]
})
export class MainPromoComponent {

  @Input() 
  pageContent:Entry<any>
  validateAgain:boolean = true;
  loading: boolean = true
  state:string = 'off'
  showMobile:boolean = false;

  constructor (@Inject(JQ_TOKEN) private $:any) {
    
  }
  
  ngOnInit() {
    if((typeof window !== "undefined") ? window.innerWidth < 700 : false) {
      this.showMobile = true;
    }
  }

  onLoad() {
    this.loading = false;  
    this.state = "on" 
  }

  ngDoCheck() { 
    if (this.pageContent && this.validateAgain) {
       this.validateAgain = !this.validateAgain
    }  
  }

  onClick() {
    let scrollToBottom = window.setInterval(() => {
        let pos = window.pageYOffset;
        var p = this.$(".scroll-to");
        if (pos < p.position().top) {
            window.scrollTo(p.position().top, pos + 10);
        } else {
            window.clearInterval(scrollToBottom);
        }
    }, 15);
  }

    
}