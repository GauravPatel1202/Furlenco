import { Injectable } from '@angular/core';  
  
@Injectable()  
export class DataService { 
 data:any; 
 review:any;
 setOption(value) {      
    this.data= value;  
  }  
  
  getOption() {  
    return this.data;  
  }  
   setReview(value) {      
    this.review= value;  
  }  
  
  getReview() {  
    return this.review;  
  } 
}  