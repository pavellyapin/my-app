import { Injectable } from "@angular/core"
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router"
import { BlogService } from "./blog/blog.service";


@Injectable()
export class BlogRouteActivator implements CanActivate{

    constructor(private blogService:BlogService , private router:Router) {
    }

    canActivate(route:ActivatedRouteSnapshot) {
        const blogExists = !!this.blogService.getBlogPosts()

        if (!blogExists) 
            this.router.navigate(['/404'])
        return blogExists
        

    }
}