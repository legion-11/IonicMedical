import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchingService {

  baseUrl = 'https://patientrecordsgroup.herokuapp.com';

  constructor(
    private http: HttpClient,
  ) { }

  GetPatients(): Observable<object> {
    return this.http.get(this.baseUrl + '/patients');
  }

  GetVitals(patientId): Observable<object> {
    return this.http.get(this.baseUrl + `/patients/${patientId}/records`);
  }

  AddVital(patientId, vitalId, data) {
    return this.http.put(this.baseUrl + `/patients/${patientId}/records/${vitalId}`, data);
  }

  DeleteVital(patientId, vitalId) {
    return this.http.delete(this.baseUrl + `/patients/${patientId}/records/${vitalId}`);
  }

  EditPatient(data) {
    return this.http.post(this.baseUrl + `/patients/${data._id}`, data);
  }

  AddPatient(data) {
    return this.http.post(this.baseUrl + `/patients`, data);
  }

  DeletePatient(patientId) {
    return this.http.delete(this.baseUrl + `/patients/${patientId}`);
  }

}
