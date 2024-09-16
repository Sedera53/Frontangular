import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { A2budget } from '../models/a2budget';
const baseUrllisteencours = "http://localhost:8080/listenecours";
const history = "http://localhost:8080/historique";
const baseurlvalider = "http://localhost:8080/valider";
@Injectable({
  providedIn: 'root'
})
export class A2budgetService {

  constructor(private http: HttpClient ) { }

  //getAll(): Observable<A2budget[]>{
    //return this.http.get<A2budget[]>(baseUrllisteencours);
  //}

  geten(page: number, size: number): Observable<any> {
    return this.http.get(`${baseUrllisteencours}?page=${page}&size=${size}`);
  }

  gethistory(page: number, size: number): Observable<any> {
    return this.http.get(`${history}?page=${page}&size=${size}`);
  }

  //updateValidation(ida2budget: number, newEtat: number): Observable<string> {
    //return this.http.patch<string>(`${this.baseurlvalider}/${ida2budget}`, { newEtat });

  //}
}
