import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
	 providedIn: 'root'
 })
export class LocationserviceService {
  constructor(
        public http: HttpClient
    ) {}

  getLocation() {
        return this.http.get("./assets/data.json")
    };
}
