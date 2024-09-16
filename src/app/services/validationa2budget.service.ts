import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Validationa2budgetService {
  private apiUrl = 'http://localhost:8080/valider';  // Remplace par ton URL backend si nécessaire

  constructor(private http: HttpClient) { }

  updateEtat(ida2budget: number, newEtat: number): Observable<string> {
    const url = `${this.apiUrl}/${ida2budget}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `newEtat=${newEtat}`;

    return this.http.patch(url, body, { headers, responseType: 'text' });
  }

  private apiUrl1 = 'http://localhost:8080/supprimer';  // Remplace par ton URL backend si nécessaire



  supEtat(ida2budget: number, newEtat: number): Observable<string> {
    const url = `${this.apiUrl1}/${ida2budget}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `newEtat=${newEtat}`;

    return this.http.patch(url, body, { headers, responseType: 'text' });
  }
}
