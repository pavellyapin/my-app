import { InjectionToken, Inject, Injectable } from "@angular/core";


export let  GA_TOKEN = new InjectionToken<Object>('GoogleAnalytics');

@Injectable()
export class GoogleAnalyticsAPI {
    constructor(@Inject(GA_TOKEN) private ga:any) { }
    
    registerEvent (action:string, category:string) {
        this.ga('send', 'event', {
            eventCategory: category,
            eventAction: action
          })
    } 

    registerPageView (urlAfterRedirects:string){
        this.ga('set', 'page', urlAfterRedirects);
        this.ga('send', 'pageview');
    }
}