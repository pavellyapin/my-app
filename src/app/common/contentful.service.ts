import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../environments/environment';

@Injectable()
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  getBlogPosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'blogPost'
    }, query))
      .then(res => res.items);
  }

  getMenuItems(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'menuItem'
    }, query))
      .then(res => res.items);
  }

  getMainPageContent(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'mainPage'
    }, query))
      .then(res => res.items);
  }

  getObjectLists(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'objectList'
    }, query))
      .then(res => res.items);      
  }

  getBigDataPageContent(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'bigDataPage'
    }, query))
      .then(res => res.items);
  }

  getDesignPageContent(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'designPage'
    }, query))
      .then(res => res.items);
  }

  getECommercePageContent(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'eCommercePage'
    }, query))
      .then(res => res.items);
  }

  getPortfolioPageContent(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'portfolioPage'
    }, query))
      .then(res => res.items);
  }

  getContactPageContent(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'contactPage'
    }, query))
      .then(res => res.items);
  }

  getFooterContent(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'footer'
    }, query))
      .then(res => res.items);
  }

  getTermsConditionsContent(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'termsConditions'
    }, query))
      .then(res => res.items);
  }
}