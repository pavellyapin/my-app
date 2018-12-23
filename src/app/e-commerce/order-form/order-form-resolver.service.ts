import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import {map} from 'rxjs/operators'
import { BundlesService } from "../service-bundles/service-bundle.service";

@Injectable()
export class OrderFormResolver implements Resolve<any> {

    constructor (private bundlesService:BundlesService) {
    }

    resolve () {
        return this.bundlesService.getBundles().pipe(map(serviceBundles=>serviceBundles))
    }

}