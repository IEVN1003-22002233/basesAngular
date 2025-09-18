import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesListComponent } from "./heroes/heroes-list/heroes-list.component";
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe, HeroesListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Deyanira Contreras Fernandez';
  duplicarNumero(valor:number):number{
    return valor * 2;
  }

  pelicula={
  titulo:'Mujercitas',
fechaLanzamiento:new Date(),
  director:'Greta Gerwig'
}
}


