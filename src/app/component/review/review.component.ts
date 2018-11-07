import { Component, OnInit,HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { ReviewserviceService } from '../../service/review/reviewservice.service';
import { DataService } from '../../service/common/data.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  startdata:any=0;
  loading:any=true;
  lengthData:any=0
  messageInput:any=false;
  restaurantReviews:any={
    "user_rating":{},
    "location":{}
  };
  reviewsCount:any={
    "user_reviews":Array,
  };
  dailymenuDatainit:any={
    "user_reviews":Array,
  }
  dailymenuData:object;
  id:any;
  review:any;
  getreviews:any;
  constructor(public reviewserviceService: ReviewserviceService,
  	public router :Router,public _dataService: DataService) { 
    this.review = this._dataService.getReview();
     if(this.review){
      this.id=this.review.restaurant.R.res_id
      window.localStorage.setItem('id', JSON.stringify(this.id));
     }else{
     this.id= JSON.parse(window.localStorage.getItem('id'));
     }
  };

  ngOnInit() {
    this.restaurant()
    this.reviews() 
    this.dailymenu()
  };

restaurant(){
   this.reviewserviceService.getrestaurant(this.id).subscribe(data => {
	 this.restaurantReviews=data
  })
 };

reviews(){
  this.reviewserviceService.getreviewsData(this.id,this.startdata).subscribe(data => {
  this.reviewsCount=data;
  this.messageInput=false;
  this.getreviews=this.reviewsCount.user_reviews;
  this.lengthData=this.getreviews.length;
  
 })
};

dailymenu(){
    this.reviewserviceService.getdailymenu(this.id).subscribe(data => {
      this.dailymenuDatainit=data
    this.dailymenuData=this.dailymenuDatainit.daily_menus;
 })
};

@HostListener("window:scroll", [])
getlistClick(){

  if (this.getScrollTop() < this.getDocumentHeight() - window.innerHeight-10) return;
  if(this.loading&&this.lengthData<this.reviewsCount.reviews_count){
  
    this.scolldata()
  }
  
};
scolldata() {
this.startdata+=5;
this.loading=false;
  this.reviewserviceService.getreviewsData(this.id,this.startdata).subscribe(data => { 
   this.loading=true;
    let callData:any=data;
      for(let i=0;i <callData.user_reviews.length;i++){    
      this.getreviews.push(callData.user_reviews[i])
      this.lengthData=this.getreviews.length
    }
 })
}

getScrollTop() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body);
};

getDocumentHeight() {
  const body = document.body;
  const html = document.documentElement;
  return Math.max(
    body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight
  );
};
};
