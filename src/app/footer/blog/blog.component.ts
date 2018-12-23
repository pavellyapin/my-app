import { Component, OnInit, Inject } from '@angular/core';
import { Entry } from '../../../../node_modules/contentful';
import { BlogService } from './blog.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { JQ_TOKEN } from '../../common/jQuery.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPost:Entry<any>
  validateAgain:boolean = true;

  constructor(private blogService:BlogService,private route:ActivatedRoute,@Inject(JQ_TOKEN) private $:any) { }

  ngOnInit() {
    this.blogPost = this.blogService.getPost(this.route.snapshot.params['name'])
  }

  ngDoCheck() {  
    this.blogPost = this.blogService.getPost(this.route.snapshot.params['name'])  
     if (this.blogPost && this.validateAgain) {   
       console.log(this.blogPost)    
      this.validateAgain = !this.validateAgain
    }  
  }

  onLoad() {
     
  }

}
