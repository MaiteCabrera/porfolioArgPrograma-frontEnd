import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","","");
  
  constructor(public personaService: PersonaService,
    private tokenService: TokenService) { 
      this.cargarPersona();
      if(this.tokenService.getToken()){
        this.isLogged = true; 
      } else {
        this.isLogged = false;
      }}
  
  isLogged = false;

  ngOnInit(): void {
  }


  cargarPersona(){
    this.personaService.detail(1).subscribe(data => 
        {this.persona = data}
      )
  }
}