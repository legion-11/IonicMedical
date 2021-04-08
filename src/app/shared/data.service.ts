import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private patientsData = [];

  //vitals data
  private vitalsData = [];

  constructor() { }

  setPatientsData(id, data) {
    this.patientsData[id] = data;
  }

  getPatientsData(id) {
    return this.patientsData[id];
  }

  setVitalsData(id, data) {
    this.vitalsData[id] = data;
  }

  getVitalsData(id) {
    return this.vitalsData[id];
  }


}
