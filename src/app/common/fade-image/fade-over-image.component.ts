import { Component, Input, OnInit } from "@angular/core";
import { navbarTransition,imageFadeAnimation } from "../animations";

@Component ({
    selector: 'fade-over-image',
    templateUrl: './fade-over-image.html',
    styleUrls: ['./fade-over.css']
    ,animations: [imageFadeAnimation]
    
})
export class FadeOverImageComponent{

      @Input() myImageUrl:string;
      state:string = 'off'

    mouseEnter(){
        this.state = 'on'
     }
  
     mouseLeave(){
        this.state = 'off'
     }
}