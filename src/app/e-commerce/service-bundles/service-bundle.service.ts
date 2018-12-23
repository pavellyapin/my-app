import { Injectable } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../common/contentful.service';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class BundlesService {

  serviceBundles:Entry<any>  
  
  constructor(private contentfulService: ContentfulService) { }

  getContent() {
     this.contentfulService.getObjectLists()
    .then(
      lists => {
      this.serviceBundles = lists.filter(list=>list.fields.type === 'serviceBundles').pop()
      }        
    )    
    return this.serviceBundles
  }

getBundles():Observable<Entry<any>> {
    this.serviceBundles = this.getContent();
    let subject = new Subject<Entry<any>>()
    setTimeout(()=>{subject.next(this.serviceBundles); subject.complete();},100)
    return subject
}

getBundle(id:string):Entry<any> { 
  if (this.serviceBundles) {
    return this.serviceBundles.fields.list.filter(bundle=>bundle.fields.type === id).pop()
  }  
}

}
