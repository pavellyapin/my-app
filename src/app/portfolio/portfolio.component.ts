import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entry } from '../../../node_modules/contentful';
import { ContentfulService } from '../common/contentful.service';
import { JQ_TOKEN } from '../common/jQuery.service';
import { mainPromoTextAnimation, clientAnimation } from '../common/animations';
import { sortBanners } from '../common/pipes';

@Component({
  templateUrl:'./portfolio.component.html',
  styleUrls: ['./portfolio.css'],
  animations : [mainPromoTextAnimation,clientAnimation]
})
export class PortfolioComponent {

  portfolioPageContent: Entry<any>;
  clients: Entry<any>[];
  firstRowClients : Entry<any>[];
  secondRowClients : Entry<any>[];
  currentClient: Entry<any>;
  validateAgain:boolean = true;
  
  
  constructor(private contentfulService: ContentfulService) { }

  loading: boolean = true
  state:string = 'off'
  clientState:string = 'on'

  onLoad() {
    this.loading = false;  
    this.state = "on" 
  } 

  ngOnInit() {
    this.contentfulService.getPortfolioPageContent()
      .then(items => this.portfolioPageContent = items.pop());
      this.contentfulService.getObjectLists()
      .then(
        lists => {
        this.clients = lists.filter(list=>list.fields.type === 'portfolioClient')
        }
    )
  }

  ngDoCheck() { 
    if (this.portfolioPageContent && this.clients && this.validateAgain) { 
      this.clients.sort(sortBanners)
      this.secondRowClients = this.clients.slice(3)
      this.firstRowClients = this.clients.slice(0,3)
      this.currentClient = this.clients[0]      
      this.validateAgain = !this.validateAgain
    }  
  }

  getClient (client:string) {
    this.clientState = 'off'
    this.currentClient = this.clients.filter(list=>list.fields.tag === client).pop();      
    setTimeout(() => {
      this.clientState = 'on';
    }, 500);
  }
}