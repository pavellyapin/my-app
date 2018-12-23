import { Component, OnInit, Input, Inject } from '@angular/core';
import { Entry } from '../../../../node_modules/contentful';
import { JQ_TOKEN } from '../../common/jQuery.service';

@Component({
  selector: 'service-bundle-banner',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css']
})
export class BundleComponent implements OnInit {

  @Input()
  bundle: Entry<any>;

  constructor(@Inject(JQ_TOKEN) private $:any) { }

  ngOnInit() {
  }

  
  toggleBundle() {
    this.$("." + this.bundle.fields.type).slideToggle(500);
  }

}
