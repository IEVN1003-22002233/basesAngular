import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesListComponent } from "./heroes/heroes-list/heroes-list.component";
import { DatePipe } from '@angular/common';
import { OperasBasComponent } from "./formularios/operas-bas/operas-bas.component";
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { CalculadoraResistencia } from './resistencias/resistencias-calculadora';

@Component({
  imports: [DatePipe, HeroesListComponent, OperasBasComponent, CinepolisComponent, ResistenciasComponent, CalculadoraResistencia, RouterOutlet],
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


