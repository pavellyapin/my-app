import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQ_TOKEN } from '../../common/jQuery.service';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.css']
})
export class BuyButtonComponent implements OnInit {

  scriptURL:string = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';  
   
  constructor (@Inject(JQ_TOKEN) private $:any) {    
  }

  ngOnInit() {
     if (this.$(window).ShopifyBuy) {
        if (this.$(window).ShopifyBuy.UI) {
          this.ShopifyBuyInit();
        } else {
          this.loadScript();
        }
      } else {
        this.loadScript();
      }
  }

  loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = this.scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = this.ShopifyBuyInit;
  }

  ShopifyBuyInit() {
    var client = window['ShopifyBuy'].buildClient({
      domain: 'splidoo-creative-agency.myshopify.com',
      storefrontAccessToken: 'd69b73f223dc99d2cbc579a7bd6cb71c',
    });

    window['ShopifyBuy'].UI.onReady(client).then(function (ui) {

      ui.createComponent('product', {
        id: [1420246188132],
        node: document.getElementById('product-component-320450cb720'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "buttonDestination": "checkout",
            "variantId": "all",
            "width": "240px",
            "contents": {
              "img": false,
              "imgWithCarousel": false,
              "title": false,
              "variantTitle": false,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "Order"
            },
            "styles": {
              "product": {
                "text-align": "left",
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#efa937",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                "padding-left": "20px",
                "padding-right": "20px",
                ":hover": {
                  "background-color": "#d79832"
                },
                "border-radius": "5px",
                ":focus": {
                  "background-color": "#d79832"
                }
              },
              "title": {
                "font-size": "26px"
              },
              "price": {
                "font-size": "18px"
              },
              "quantityInput": {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px"
              },
              "compareAt": {
                "font-size": "15px"
              }
            }
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                "background-color": "#efa937",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#d79832"
                },
                "border-radius": "5px",
                ":focus": {
                  "background-color": "#d79832"
                }
              },
              "footer": {
                "background-color": "#ffffff"
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "background-color": "#efa937",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                "padding-left": "20px",
                "padding-right": "20px",
                ":hover": {
                  "background-color": "#d79832"
                },
                "border-radius": "5px",
                ":focus": {
                  "background-color": "#d79832"
                }
              },
              "quantityInput": {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px"
              }
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#efa937",
                ":hover": {
                  "background-color": "#d79832"
                },
                ":focus": {
                  "background-color": "#d79832"
                }
              },
              "count": {
                "font-size": "14px"
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
    });
  }

}
