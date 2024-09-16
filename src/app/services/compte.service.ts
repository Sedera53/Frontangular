import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte';
const apiUrl ="http://localhost:8080/liste_comptes"
const apiUrl1 ="http://localhost:8080/inserercompte"
@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http : HttpClient) { }

  //getAll(): Observable<Compte[]>{
  ///  return this.http.get<Compte[]>(apiUrl);
  //}
  getcompte(page: number, size: number): Observable<any> {
    return this.http.get(`${apiUrl}?page=${page}&size=${size}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(apiUrl1,data);
  }

  private apiUrlsu = 'http://localhost:8080/sup';  // Remplace par ton URL backend si nécessaire



  updateEtat(idcompte: number, newEtat: number): Observable<string> {
    const url = `${this.apiUrlsu}/${idcompte}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `newEtat=${newEtat}`;

    return this.http.patch(url, body, { headers, responseType: 'text' });
  }
}
