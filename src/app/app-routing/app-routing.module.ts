import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { GeolocationComponent } from '../component/geolocation/geolocation.component';
import { ListComponent } from '../component/list/list.component';
import { ReviewComponent } from '../component/review/review.component';
const routes: Routes = [
{ path: '', component: GeolocationComponent },
{ path: 'list', component: ListComponent },
{ path: 'review', component: ReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
