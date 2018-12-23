import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Entry } from "contentful";

@Pipe({
    name: 'imagePipe'
  })
    export class ImagePipe {
      constructor (public sanitizer: DomSanitizer) {}
        transform(url:string):any {
          var fullUrl = 'https:' + url;
          return this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
    }
  }

  @Pipe({
    name: 'richTextPipe'
  })
    export class RichTextPipe {
      constructor () {}
        transform(text:string):any {
          if (text) {
            return documentToHtmlString(text)
          } else {
            return ''
          }        
          
    }
  }

  
export function sortBanners (s1:Entry<any> , s2:Entry<any>) {
    if(s1.fields.order > s2.fields.order) return 1
    else if (s1.fields.order === s2.fields.order) return 0
    else return -1
  
  }

 export function sortMenuItem (s1:Entry<any> , s2:Entry<any>) {
    if(s1.fields.sort > s2.fields.sort) return 1
    else if (s1.fields.sort === s2.fields.sort) return 0
    else return -1

}