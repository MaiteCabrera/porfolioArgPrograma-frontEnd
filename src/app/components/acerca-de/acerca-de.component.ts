import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = new Persona("","","");
  
  constructor(public personaService: PersonaService) {
    this.personaService.getPersona().subscribe(data => {console.log(data)/*this.persona = data*/})

   }

  ngOnInit(): void {
  //  this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}