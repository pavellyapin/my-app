import {Component, EventEmitter, Injectable} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { DatePipe } from '../../../../node_modules/@angular/common';

@Component ({
    selector : 'simple-contact-form',
    templateUrl:'./simple-contact-form.component.html',
    styleUrls: ['./simple-contact-form.component.css'],    
    providers: [DatePipe]
})
@Injectable()
export class SimpleContactFormComponent {
    private emails: AngularFireList<ContactDetails[]>;   
  
    constructor (private db: AngularFireDatabase,private datePipe: DatePipe){
        this.emails = db.list("/email");
    }  
    
    nameFormControl = new FormControl('', []);       
    emailFormControl = new FormControl('', [
        Validators.required
      ]);      
    phoneFormControl = new FormControl('', []);  
    brandFormControl = new FormControl('', []);
    msgFormControl = new FormControl('', []);  
    howFormControl = new FormControl('', []);  
    howOptions: howOption[] = [
        {value: 'google', viewValue: 'Google'},
        {value: 'bing', viewValue: 'Bing'},
        {value: 'social', viewValue: 'Social'},
        {value: 'friend', viewValue: 'Friend'},
        {value: 'other', viewValue: 'Other'}
      ];   
    matcher = new MyErrorStateMatcher();

    msgSent:boolean = false;
      sendMsg () {          
        let contactInfo:ContactDetails = {
            name : this.nameFormControl.value, 
            email : this.emailFormControl.value,
            phone : this.phoneFormControl.value,
            how : this.howFormControl.value,
            brand : this.brandFormControl.value,
            msg : this.msgFormControl.value
        }
        this.emails.push([contactInfo]);
        this.msgSent = true;
        this.msgFormControl.setValue("Thank you, talk soon!")

        var emitter = new EventEmitter(true); 
        setTimeout(() => {
            emitter.emit(this.msgSent);
        },100)
        return emitter;     
      }
}

export interface howOption {
    value: string;
    viewValue: string;
  }

  export interface ContactDetails {    
        name?:string;
        email:string; 
        phone?:string; 
        how?:string;
        brand?:string; 
        msg?:string;
}
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }
