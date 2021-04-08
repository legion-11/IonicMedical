import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchingService {

  baseUrl = 'https://patientrecordsgroup.herokuapp.com';
  // baseUrl = 'http://127.0.0.1:3009';

  constructor(
    private http: HttpClient,
  ) { }

  GetPatients(): Observable<object> {
    return this.http.get(this.baseUrl + '/patients');
  }

  GetVitals(patientId): Observable<object> {
    return this.http.get(this.baseUrl + `/patients/${patientId}/records`);
  }

  AddVitals(patientId, data) {
    return this.http.post(this.baseUrl + `/patients/${patientId}/records`, data);
  }

  AddVital(patientId, vitalId, data) {
    return this.http.put(this.baseUrl + `/patients/${patientId}/records/${vitalId}`, data);
  }

  DeleteVital(patientId, vitalId) {
    return this.http.delete(this.baseUrl + `/patients/${patientId}/records/${vitalId}`);
  }

  EditPatient(data) {
    console.log('post editpatients');
    return this.http.put(this.baseUrl + `/patients/${data._id}`, data);
  }

  AddPatient(data) {
    console.log('post addpatients');
    // let headers = new HttpHeaders();
    // headers = headers.append('token', 'someToken');
    // headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append("Accept", 'application/json');
    return this.http.post(this.baseUrl + "/patients", data);
  }

  DeletePatient(patientId) {
    return this.http.delete(this.baseUrl + `/patients/${patientId}`);
  }

}
