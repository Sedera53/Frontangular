import { Injectable } from '@angular/core';
import { Codebenef } from '../models/codebenef';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl ='http://localhost:8080/liste_codebenef';
const baseUrl1 ='http://localhost:8080/inserer_codebenef';
@Injectable({
  providedIn: 'root'
})
export class CodebenefService {

  constructor(private http : HttpClient) { }

  //getAll(): Observable<Codebenef[]>{
  //  return this.http.get<Codebenef[]>(baseUrl);
  //}

  getCodebenefList(page: number, size: number): Observable<any> {
    return this.http.get(`${baseUrl}?page=${page}&size=${size}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl1,data);
  }
}
