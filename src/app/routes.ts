import {Routes} from '@angular/router'
import { MainPageComponent } from './main/main-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactPageComponent } from './contact-form/contact-page.component';
import { WebDesignComponent } from './design/web-design/web-design.component';
import { BigDataComponent } from './big-data/big-data.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { OrderFormResolver } from './e-commerce/order-form/order-form-resolver.service';
import { OrderRouteActivator } from './e-commerce/order-form/order-route-activator.service';
import { OrderPageComponent } from './e-commerce/order-form/order-page/order-page.component';
import { BlogResolver } from './footer/blog-resolver.service';
import { BlogRouteActivator } from './footer/blog-route-activator.service';
import { BlogComponent } from './footer/blog/blog.component';
import { TermsConditionsComponent } from './footer/terms-conditions/terms-conditions.component';



export const appRoutes:Routes = [

    {path:'main', component:MainPageComponent},
    {path:'portfolio', component:PortfolioComponent},
    {path:'contact', component:ContactPageComponent},
    {path:'design/web', component:WebDesignComponent},  
    {path:'services', 
    component:ECommerceComponent},
    {path:'ordernow/:id', 
    resolve: {serviceBundles:OrderFormResolver},
    canActivate: [OrderRouteActivator], 
    component:OrderPageComponent,
    runGuardsAndResolvers: 'always'},
    {path:'bigdata', component:BigDataComponent},     
    {path:'blog/:name', 
    resolve: {blogPosts:BlogResolver},
    canActivate: [BlogRouteActivator], 
    component:BlogComponent,
    runGuardsAndResolvers: 'always'},    
    {path:'',redirectTo:'/main', pathMatch:'full'},
    {path:'terms', component:TermsConditionsComponent}

]