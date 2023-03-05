import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'http://backendmaitecabrera.onrender.com/persona/';
  //URL = 'http://localhost:8080/personas/';

  constructor(private httpClient: HttpClient) { }
  
  public lista (): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL + 'lista');


  }

  public detail(id :number):Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `traer/perfil`);

}

/*public save(educacion :Educacion):Observable<any>{
    return this.httpClient.post<any>(this.URL + `create`, educacion);
}*/

public update(id :number, Persona:persona):Observable<any>{
    return this.httpClient.put<any>(`${this.URL}editar/${id}`, Persona);


}

/*public delete (id : number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
}*/

}