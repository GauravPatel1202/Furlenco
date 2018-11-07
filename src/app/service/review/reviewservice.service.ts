import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'user-key': '8df1fac832239f412f8e47ae7519dbd3'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReviewserviceService {

  constructor(
        public http: HttpClient
    ) {


  }
  getrestaurant(data) {
    
        return this.http.get("https://developers.zomato.com/api/v2.1/restaurant?res_id="+data,httpOptions)
  };
  
  getreviewsData(data,start) {
   
        return this.http.get("https://developers.zomato.com/api/v2.1/reviews?res_id="+data+'&start='+start ,httpOptions)
  };
  getdailymenu(data) {
    
        return this.http.get("https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624" ,httpOptions)
  };
  
}
