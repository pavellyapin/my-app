import { Component} from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../common/contentful.service';


@Component({
  templateUrl:'./main-page.component.html',
  styleUrls: ['./main.css']
})
export class MainPageComponent {
    constructor (private contentfulService: ContentfulService)
      {}
      validateAgain:boolean = true;
      mainPageContent: Entry<any>;
      keyPoints: Entry<any>;
      clientPoints: Entry<any>;
     
      ngOnInit() {
        this.contentfulService.getMainPageContent()
          .then(items => this.mainPageContent = items.pop());
          this.contentfulService.getObjectLists()
          .then(lists => {this.keyPoints = lists.filter(list=>list.fields.type === 'keyPoints').pop(),
                        this.clientPoints = lists.filter(list=>list.fields.type === 'clientPoints').pop()}
            )
      }

      ngDoCheck() { 
        if (this.mainPageContent && this.validateAgain) {
          this.validateAgain = !this.validateAgain
        }  
      }
    }
