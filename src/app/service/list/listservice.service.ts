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
export class ListserviceService {

  constructor(
        public http: HttpClient
    ) {}

  getLocation(data) {
        return this.http.get("https://developers.zomato.com/api/v2.1/search?start="+data.startData+"&count=20&lat="+data.latitude+"&lon="+data.longitude+"&order=asc",httpOptions)
  };
  getCurrentLocation(data) {
        return this.http.get("https://developers.zomato.com/api/v2.1/cities?lat="+data.latitude+"&lon="+data.latitude,httpOptions)
  };
  
}
