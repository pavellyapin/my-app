import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { JQ_TOKEN } from '../jQuery.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(@Inject(JQ_TOKEN) private $:any) { }

  ngOnInit() {
  }

  @HostListener('$scope', ['$window'])
  openLinkedIn() {
    console.log('open')
    this.$(window).open('https://www.google.com', '_blank')
  }

}
