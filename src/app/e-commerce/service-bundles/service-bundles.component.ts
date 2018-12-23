import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ActivatedRoute, Router } from '@angular/router';
import { BundlesService } from './service-bundle.service';
import { ContentfulService } from '../../common/contentful.service';

@Component({
  selector: 'service-bundles',
  templateUrl: './service-bundles.component.html',
  styleUrls: ['./service-bundles.component.css']
})

export class ServiceBundlesComponent implements OnInit {

  serviceBundles:Entry<any>
  validateAgain:boolean = true;
  showSVG:boolean = true;
  
  constructor(private contentfulService: ContentfulService,private router:Router) { }

  ngOnInit() {
    if((typeof window !== "undefined") ? window.innerWidth < 700 : false) {
      this.showSVG = false;
    }    
    this.contentfulService.getObjectLists()
    .then(
      lists => {
      this.serviceBundles = lists.filter(list=>list.fields.type === 'serviceBundles').pop()
      }        
    )      
  }

  navigate(type:string){
    this.router.navigate(['/ordernow/' + type])
  }

  ngDoCheck() {  
      if (this.serviceBundles && this.validateAgain) {  
      this.validateAgain = !this.validateAgain
    }  
  }
}
