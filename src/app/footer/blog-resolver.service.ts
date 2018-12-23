import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import {map} from 'rxjs/operators'
import { BlogService } from "./blog/blog.service";

@Injectable()
export class BlogResolver implements Resolve<any> {

    constructor (private blogService:BlogService) {
    }

    resolve () {
        return this.blogService.getBlogPosts().pipe(map(blogPosts=>blogPosts))
    }

}