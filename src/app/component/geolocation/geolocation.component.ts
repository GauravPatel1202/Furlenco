import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { LocationserviceService } from '../../service/location/locationservice.service';
import { DataService } from '../../service/common/data.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css'],
  
})
export class GeolocationComponent implements OnInit {
Citylist:any=[];
autoLoaction:any={
      "latitude":Number,
      "longitude":Number,
    };
 constructor(public locationserviceService: LocationserviceService,
  	public router :Router,public _dataService: DataService) {}

ngOnInit() {
 this.Location()
 

};

btnClick(data) {
  this._dataService.setOption(data);
  this.router.navigate(['/list']);
};

Location() {
  this.locationserviceService.getLocation().subscribe(data => {
	this.Citylist=data
  
 })
};

};
