import { Injectable } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../common/contentful.service';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class BlogService {

  blogPosts:Entry<any>[]  
  
  constructor(private contentfulService: ContentfulService) { }

  getContent() {
     this.contentfulService.getBlogPosts()
    .then(
      lists => {
      this.blogPosts = lists
      }        
    )    
    return this.blogPosts
  }

getBlogPosts():Observable<Entry<any>[]> {
    this.blogPosts = this.getContent();
    let subject = new Subject<Entry<any>[]>()
    setTimeout(()=>{subject.next(this.blogPosts); subject.complete();},100)
    return subject
}

getPost(name:string):Entry<any> { 
  if (this.blogPosts) {
    return this.blogPosts.filter(post=>post.fields.name === name).pop()
  }  
}

}
