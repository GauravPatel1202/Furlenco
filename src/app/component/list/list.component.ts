import { Component, OnInit,HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { ListserviceService } from '../../service/list/listservice.service';
import { DataService } from '../../service/common/data.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
Startingindex:any=0;
page:any=0;
currentpage:number=0;
dataLoaction:any;
lengthData:any=0;
Position:any;
loading:any=true;
restaurantslist:any=[];
restaurantsScroll:any={
	"restaurants":Array,
};
dataObject:any={
	'results_found':Array,
	'restaurants':Number,
}

constructor(public listserviceService : ListserviceService,public router: Router,public _dataService: DataService) {
    this.dataLoaction = _dataService.getOption();  
     this.Position= JSON.parse(window.localStorage.getItem('Position'));
    
   if(this.dataLoaction){
      window.localStorage.setItem('Loaction', JSON.stringify(this.dataLoaction));
      this.Position= JSON.parse(window.localStorage.getItem('Position'));
     }else{
     this.dataLoaction= JSON.parse(window.localStorage.getItem('Loaction'));
      this.Position= window.localStorage.getItem('Loaction');
     }
 };
  
ngOnInit() {
	this.getCorrentLocation()
	this.getLocationCurrt()
   
};
getCorrentLocation(){
	this.listserviceService.getCurrentLocation(this.Position).subscribe(data => {
		if(this.Position.city_name==this.dataLoaction.city_name){
			this.dataLoaction.latitude=this.Position.latitude
			this.dataLoaction.longitude=this.Position.longitude
			this.getlist()
		}else{
			this.getlist()
		}
 })
};
getlist(){
	this.dataLoaction.startData=0
	this.listserviceService.getLocation(this.dataLoaction).subscribe(data => {
	this.dataObject=data
	this.restaurantslist=this.dataObject.restaurants
	this.lengthData=this.restaurantslist.length
 })
};

btnClick(data) {
	this._dataService.setReview(data);
   this.router.navigate(['/review']);
};

@HostListener("window:scroll", [])
getlistClick(){
 if ((this.getScrollTop() < this.getDocumentHeight() - window.innerHeight-10)) return;
    if(this.loading&&this.lengthData<this.dataObject.results_found)
    this.scrollData()	
	
};
scrollData(){
	this.loading=false;
	this.currentpage++	
	this.Startingindex+=20
	this.dataLoaction.startData=this.Startingindex
	this.listserviceService.getLocation(this.dataLoaction).subscribe(data => {
		this.restaurantsScroll=data;
		this.loading=true;
        let datainfo=this.restaurantsScroll.restaurants;
       for(let i=0;i <datainfo.length;i++){		
			this.restaurantslist.push(datainfo[i]);
			this.lengthData=this.restaurantslist.length
		};
	});
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
getLocationCurrt() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
     let data={
      "latitude":position.coords.latitude,
       "longitude":position.coords.longitude
      }	
      window.localStorage.setItem('Position', JSON.stringify(data));
      });
    }
};

}
