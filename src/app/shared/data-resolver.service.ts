import { Injectable } from '@angular/core';
import { DataService } from './../shared/data.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('id');
    const segment = route.url[0].path;
    switch (segment) {
      case 'viewpatient' : return this.dataService.getPatientsData(id);
      default: return;
    }
  }
}
