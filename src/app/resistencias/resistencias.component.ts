import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculadoraResistencia } from './resistencias-calculadora';

@Component({
  selector: 'app-resistencias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  colores: string[] = [
    'Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo',
    'Verde', 'Azul', 'Morado', 'Gris', 'Blanco'
  ];

  banda1: string = '';
  banda2: string = '';
  mult: string = '';
  tolerancia: string = '';

  res: { val: number, min: number, max: number };

  calculadora = new CalculadoraResistencia();

  colorHex(color: string): string {
    switch (color) {
      case 'Negro': return '#000000';
      case 'Café': return '#412b1bff';
      case 'Rojo': return '#ff2f00ff';
      case 'Naranja': return '#ffa200ff';
      case 'Amarillo': return '#ffea00ff';
      case 'Verde': return '#26ff00ff';
      case 'Azul': return '#397fffff';
      case 'Morado': return '#9000ffff';
      case 'Gris': return '#808080';
      case 'Blanco': return '#FFFFFF';
      case 'Dorado': return '#FFD700';
      case 'Plata': return '#C0C0C0';
      default: return '#FFFFFF';
    }
  }

  valorColor(color: string): number {
    return this.calculadora.valorColor(color);
  }

  valorMult(color: string): number {
    return this.calculadora.valorMult(color);
  }

  calcular() {
    this.calculadora.banda1 = this.banda1;
    this.calculadora.banda2 = this.banda2;
    this.calculadora.mult = this.mult;
    this.calculadora.tolerancia = this.tolerancia;

    this.res = this.calculadora.calcular();
  }
}
