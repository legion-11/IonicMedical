import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private patientsData = [];
  constructor() { }

  setPatientsData(id, data) {
    this.patientsData[id] = data;
  }

  getPatientsData(id) {
    return this.patientsData[id];
  }

}
