import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
/*  template:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hola Mundo</h1>
</body>
</html>
  `,*/
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


