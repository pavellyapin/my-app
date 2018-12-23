import { Injectable } from "@angular/core"
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router"
import { BundlesService } from "../service-bundles/service-bundle.service";


@Injectable()
export class OrderRouteActivator implements CanActivate{

    constructor(private bundleService:BundlesService , private router:Router) {
    }

    canActivate(route:ActivatedRouteSnapshot) {
        const bundleExists = !!this.bundleService.getBundles()

        if (!bundleExists) 
            this.router.navigate(['/404'])
        return bundleExists
        

    }
}