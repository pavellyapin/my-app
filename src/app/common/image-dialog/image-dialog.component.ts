import { Component, Input, OnInit} from "@angular/core";
import { imageFadeAnimation, imageDialogAnimation, imageDialogButtonAnimation } from "../animations";
import { MatDialog } from "@angular/material";

@Component ({
    selector: 'image-dialog',
    templateUrl: './image-dialog.html',
    styleUrls: ['./image-dialog.css']
    ,animations: [imageFadeAnimation, imageDialogAnimation , imageDialogButtonAnimation]
    
})
export class ImageDialogComponent implements OnInit{

      constructor(public dialog: MatDialog) {}

      @Input() portfolioItemId:string;      
      myImageUrl:string;
      site:string;
      state:string = 'off'
      itemState:boolean = false
      expandState:string = 'false'
      dialogRef:any;

      ngOnInit(): void {
        var portfolioItem:any = portfolioItems.filter(item => item.id === this.portfolioItemId)
        this.myImageUrl = portfolioItem[0].path;
        this.site = portfolioItem[0].site;
      }    

      mouseEnter(div:string){
        if (div === 'item') {
            this.itemState = true
        } else {
            this.expandState = 'true'
        }
        this.state = 'on'
     }
  
     mouseLeave(div:string){
        if (div === 'item') {
            this.itemState = false
        } else {
            this.expandState = 'false'
        }
        setTimeout(()=>{
             if (this.expandState === 'false' && !this.itemState) {
                 this.state = 'off'
             } 
         }, 100)        
     }

     
     openDialog() {
      /* switch (this.portfolioItemId) {
         case 'ci':
         this.dialogRef = this.dialog.open(CIDialogComponent);
         break;
         case 'rbc':
         this.dialogRef = this.dialog.open(RBCDialogComponent);
         break;
         case 'yorku':
         this.dialogRef = this.dialog.open(YorkDialogComponent);
         break;
         case 'wcg':
         this.dialogRef = this.dialog.open(WCGDialogComponent);
         break;
         case 'aerosoft':
         this.dialogRef = this.dialog.open(AeroSoftDialogComponent);
         break; 
       }     */    
   
       this.dialogRef.afterClosed().subscribe(result => {
         if (result) {
           console.log(this.site)
          window.open(this.site, '_blank');
         }
         
       });
     } 
}

const portfolioItems:any[] = [
  {
      id : 'ci',
      path : 'assets/ci-01.png',
      site : 'https://www.cifinancial.com/'
  },
  {
    id : 'rbc',
    path : 'assets/rbc-01.png',
    site : 'https://www.rbc.com/about-rbc.html'
  },
  {
    id : 'aerosoft',
    path : 'assets/aerosoft-01.png',
    site : 'https://www.linkedin.com/company/aerosoft-systems-inc./'
  },
  {
    id : 'wcg',
    path : 'assets/wcg-01.png',
    site : 'https://www.whiteclarkegroup.com'
  },
  {
    id : 'yorku',
    path : 'assets/yorku-01.png',
    site : 'https://www.yorku.ca'
  }
]