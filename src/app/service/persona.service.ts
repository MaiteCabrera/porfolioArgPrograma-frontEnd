import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/Persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  ///URL = 'https://maitecabreraporfolioargprogram.herokuapp.com/personas/';
  URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.URL+ 'traer/perfil');
  }
}