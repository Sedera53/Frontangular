import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Codetyp } from '../models/codetyp';
const apicodetype = "http://localhost:8080/liste_codetype"
const apicodetypeinserer = "http://localhost:8080/inserer_codetype"
@Injectable({
  providedIn: 'root'
})
export class CodetypService {

  constructor(private http : HttpClient) { }

  getcodetype():Observable<Codetyp[]>{
    return this.http.get<Codetyp[]>(apicodetype);
  }

  create(data:any): Observable<any> {
    return this.http.post<any>(apicodetypeinserer,data);
  }
}
