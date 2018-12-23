import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute} from '../../../../../node_modules/@angular/router';
import { BundlesService } from '../../service-bundles/service-bundle.service';
import { Entry } from '../../../../../node_modules/contentful';
import { JQ_TOKEN } from '../../../common/jQuery.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  bundle:Entry<any>
  validateAgain:boolean = true;

  constructor(private bundleService:BundlesService,private route:ActivatedRoute,@Inject(JQ_TOKEN) private $:any) { }

  ngOnInit() {
    this.bundle = this.bundleService.getBundle(this.route.snapshot.params['id'])
  }

  ngDoCheck() {  
    this.bundle = this.bundleService.getBundle(this.route.snapshot.params['id'])  
     if (this.bundle && this.validateAgain) {       
      this.validateAgain = !this.validateAgain
    }  
  }
  
  toggleBundle() {
    this.$(".bundle-list").slideToggle(500);
  }
}
