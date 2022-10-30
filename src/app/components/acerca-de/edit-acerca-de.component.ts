import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';

import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: persona = null;
  imgRef: string = null;

  constructor(private activatedRouter: ActivatedRoute, 
    private personaService: PersonaService, 
    private router : Router,
    ) { }
//
  ngOnInit(): void {
    const id = 1;
    console.log(id);
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
        alert("Error al modificar ");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.persona.id;
    this.persona.img = this.imgRef
    this.personaService.update(id, this.persona).subscribe({
    next: (any) => {
        this.router.navigate(['']);
      },error: (err) => {
        alert("Error al editar la Persona")
        this.router.navigate(['']);
      }
    })

  }
  

  /*uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }*/
}