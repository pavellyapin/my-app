import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { MainPageComponent } from './main/main-page.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuItemComponent } from './menu/menu-item.component';
import { MaterialModule } from './common/material.module';
import { environment } from '../environments/environment';
import { ContactPageComponent } from './contact-form/contact-page.component';
import { ShopifyComponent } from './e-commerce/shopify/shopify.component';
import { DatabasesComponent } from './big-data/databases/databases.component';
import { FourStageBannerComponent} from './main/blocks/four-stage-banner/four-stage-banner.component';
import { FeaturedClientComponent } from './main/featured-client/featured-client.component';
import { SimpleContactFormComponent } from './contact-form/simple-contact-form/simple-contact-form.component';
import { RoadToDesignComponent } from './main/road-to-design/road-to-design.component';
import { BigDataComponent } from './big-data/big-data.component';
import { WebDesignComponent } from './design/web-design/web-design.component';
import { ArtsyComponent } from './design/web-design/artsy/artsy.component';
import { DesignHistoryComponent } from './design/web-design/design-history/design-history.component';
import { BuyButtonComponent } from './e-commerce/buy-button/buy-button.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ServiceBundlesComponent } from './e-commerce/service-bundles/service-bundles.component';
import { MainPromoComponent } from './main/promo/main-promo.component';
import { OrderRouteActivator } from './e-commerce/order-form/order-route-activator.service';
import { OrderFormResolver } from './e-commerce/order-form/order-form-resolver.service';
import { BundlesService } from './e-commerce/service-bundles/service-bundle.service';
import { OrderPageComponent } from './e-commerce/order-form/order-page/order-page.component';
import { ProjectDetailsFormComponent } from './contact-form/project-details-form/project-details-form.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { IframeTrackerDirective } from './contact-form/project-details-form/iframe-tracker.directive';
import { NavMenuItemComponent } from './nav/nav-menu-item/nav-menu-item.component';
import { BundleComponent } from './e-commerce/bundle/bundle.component';
import { BlogComponent } from './footer/blog/blog.component';
import { BlogService } from './footer/blog/blog.service';
import { BlogResolver } from './footer/blog-resolver.service';
import { BlogRouteActivator } from './footer/blog-route-activator.service';
import { TermsConditionsComponent } from './footer/terms-conditions/terms-conditions.component';
import { SinglePageAppBannerComponent } from './main/blocks/single-page-app-banner/single-page-app-banner.component';
import { FadeOverImageComponent } from './common/fade-image/fade-over-image.component';
import { ImageDialogComponent } from './common/image-dialog/image-dialog.component';
import { ImagePipe, RichTextPipe } from './common/pipes';
import { MatchHeightDirective } from './common/match-height.directive';
import { SocialComponent } from './common/social/social.component';
import { PortfolioRowComponent } from './common/portfolio-row/portfolio-row.component';
import { GoogleAnalyticsAPI, GA_TOKEN } from './common/GoogleAnalytics.service.';
import { ContentfulService } from './common/contentful.service';
import { JQ_TOKEN } from './common/jQuery.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
 
export let jQuery = (typeof window !== "undefined") ? window['$'] : null;
export let GoogleAnalytics = (typeof window !== "undefined") ? window['ga'] : null;


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPageComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    MainPromoComponent,
    ContactPageComponent,
    ShopifyComponent,
    DatabasesComponent,
    FourStageBannerComponent,
    FeaturedClientComponent,
    SimpleContactFormComponent,
    RoadToDesignComponent,
    BigDataComponent,
    WebDesignComponent,
    ArtsyComponent,
    DesignHistoryComponent,
    BuyButtonComponent,
    ECommerceComponent,
    ServiceBundlesComponent,
    OrderPageComponent,
    ProjectDetailsFormComponent,
    IframeTrackerDirective,
    NavMenuItemComponent,
    BundleComponent,
    BlogComponent,
    TermsConditionsComponent,
    SinglePageAppBannerComponent,
    FadeOverImageComponent,
    ImageDialogComponent,       
    ImagePipe,
    RichTextPipe,
    MatchHeightDirective,
    SocialComponent,
    PortfolioRowComponent,
    PortfolioComponent
  ],
  imports: [
    NgbModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(appRoutes , {onSameUrlNavigation:'reload'}),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ColorPickerModule
  ],  
  providers: [
    GoogleAnalyticsAPI,
    ContentfulService,
    {provide: JQ_TOKEN , useValue:jQuery},
    {provide: GA_TOKEN , useValue:GoogleAnalytics},
    BundlesService,
    BlogService,
    OrderFormResolver,
    OrderRouteActivator,
    BlogResolver,
    BlogRouteActivator],  
  bootstrap: [AppComponent] 
})

export class AppModule { }
