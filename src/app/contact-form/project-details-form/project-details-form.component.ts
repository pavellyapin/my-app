import {Component, Input} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import { ContactDetails, OrderDetails, udtOption } from '../../common/models';
import { Entry } from '../../../../node_modules/contentful';
import { DatePipe } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'project-details-form',
  templateUrl: './project-details-form.component.html',
  styleUrls: ['./project-details-form.component.css'],
  providers: [DatePipe]
})


export class ProjectDetailsFormComponent{
  
@Input()
thankYou: Entry<any>;
emails: AngularFireList<ContactDetails[]>;
@Input()
order:boolean = false;

    constructor (private db: AngularFireDatabase,private datePipe: DatePipe){
      this.emails = db.list("/email");
    }
 
    msgSent:boolean = false;
    sendMsg () {   
        let contactInfo:OrderDetails = {
            name : this.nameFormControl.value, 
            email : this.emailFormControl.value,
            phone : this.phoneFormControl.value,
            how : this.howFormControl.value,
            city : this.cityFormControl.value,
            msg : this.msgFormControl.value,
            firstSite: this.firstSiteFormControl.value,
            timeline : this.timelineFormControl.value,
            shopify : this.shopifyFormControl.value,
            color : this.color            
        }
        this.emails.push([contactInfo]);
        this.msgSent = true;    
      }

         
    nameFormControl = new FormControl('', []);       
    emailFormControl = new FormControl('', []);      
    phoneFormControl = new FormControl('', []);  
    cityFormControl = new FormControl('', []);
    msgFormControl = new FormControl('', []);  
    howFormControl = new FormControl('', []);  
    howOptions: udtOption[] = [
        {value: 'google', viewValue: 'Google'},
        {value: 'bing', viewValue: 'Bing'},
        {value: 'social', viewValue: 'Social'},
        {value: 'friend', viewValue: 'Friend'},
        {value: 'other', viewValue: 'Other'}
      ]; 
    firstSiteFormControl = new FormControl('', []);  
    firstSiteOptions: udtOption[] = [
          {value: 'yes', viewValue: 'Yes'},
          {value: 'progress', viewValue: 'I am in the process of creating it'},
          {value: 'no', viewValue: 'No, I already have a site'}
        ];
    timelineFormControl = new FormControl('', []);  
    timelineOptions: udtOption[] = [
              {value: '2weeks', viewValue: 'It would be nice to have it ready within 2 weeks'},
              {value: 'big', viewValue: 'I got big plans, probably a month'},
              {value: 'notSure', viewValue: 'Not sure'}
            ];
    shopifyFormControl = new FormControl('', []);  
    shopifyOptions: udtOption[] = [
              {value: 'yes', viewValue: 'Yes, I got a shopify account already'},
              {value: 'new', viewValue: 'Yes, I will need a new account'},
              {value: 'no', viewValue: 'Not right now'}
            ];
            
    color:string = 'white';    
    matcher = new MyErrorStateMatcher();
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }
