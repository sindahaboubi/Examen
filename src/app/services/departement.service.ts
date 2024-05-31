import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departement } from '../classes/departement';
import { Observable } from 'rxjs';

const URL = "http://localhost:4000/departements";
@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient) { }

  ajouterDepartement(dep: Departement): Observable<Departement> {
    return this.http.post<Departement>(URL, dep);
  }

  getDepartements():Observable<Departement[]>{
    return this.http.get<Departement[]>(URL);
  }

  getDepartementById(id: number) {
    const url = `http://localhost:4000/departements/${id}`;
    return this.http.get(url);
  }

  updateDepartement(matricule:number, d: Departement):Observable<Departement>{
    return this.http.put<Departement>(URL+"/"+ matricule, d);
  }
}
