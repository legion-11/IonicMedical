import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchingService {

  url = 'https://patientrecordsgroup.herokuapp.com';

  constructor(
    private http: HttpClient,
  ) { }

  GetPatients(): Observable<object> {
    return this.http.get(this.url + '/patients');
  }

  GetVitals(patientId): Observable<object> {
    return this.http.get(this.url + `/patients/${patientId}/records`);
  }

  AddVital(patientId, vitalId, data) {
    this.http.put(this.url + `/patients/${patientId}/records/${vitalId}`, data);
  }

  DeleteVital(patientId, vitalId) {
    this.http.delete(this.url + `/patients/${patientId}/records/${vitalId}`);
  }

  AddPatient(patientId, data) {
    this.http.put(this.url + `/patients/${patientId}`, data);
  }

  DeletePatient(patientId) {
    this.http.delete(this.url + `/patients/${patientId}`);
  }

}
