import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modeexecution } from '../models/Modeexecution.model';
import { ActivatedRoute } from '@angular/router';

const baseUrl = 'http://localhost:8080/liste_me';
const baseUrl1= 'http://localhost:8080/inserer_me';
const baseUrl3= 'http://localhost:8080/inserer_me';
@Injectable({
  providedIn: 'root'
})
export class ModeexecutionService {

  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  getAll(): Observable<Modeexecution[]>{
    return this.http.get<Modeexecution[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(baseUrl1,data);
  }



  private apiUrl1 = 'http://localhost:8080/modifier';  // Remplace par ton URL backend si nécessaire



  getModeexecutionList(modeexecution: String): Observable<any> {
    return this.http.get<any>(`${this.apiUrl1}/${modeexecution}`);
  }

  modeexecutionList: any[] = [];



  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['data']) {
        this.modeexecutionList = JSON.parse(params['data']);
      }
    });
  }
}
