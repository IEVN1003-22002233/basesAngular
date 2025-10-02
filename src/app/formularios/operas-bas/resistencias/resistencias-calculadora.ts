import { Component } from "@angular/core";

@Component({
  selector: 'app-calculadora-resistencia',
  template: '',
  standalone: true
})
export class CalculadoraResistencia {
  banda1: string = '';
  banda2: string = '';
  mult: string = '';
  tolerancia: string = '';
  c1: number = 0;
  c2: number = 0;
  m: number = 0;
  val: number = 0;
  min: number = 0;
  max: number = 0;

  res: { val: number, min: number, max: number };

  valorColor(color: string): number {
    switch (color) {
      case 'Negro': return 0;
      case 'Café': return 1;
      case 'Rojo': return 2;
      case 'Naranja': return 3;
      case 'Amarillo': return 4;
      case 'Verde': return 5;
      case 'Azul': return 6;
      case 'Morado': return 7;
      case 'Gris': return 8;
      case 'Blanco': return 9;
      default: return 0;
    }
  }

  valorMult(color: string): number {
    switch (color) {
      case 'Negro': return 1;
      case 'Café': return 10;
      case 'Rojo': return 100;
      case 'Naranja': return 1000;
      case 'Amarillo': return 10000;
      case 'Verde': return 100000;
      case 'Azul': return 1000000;
      case 'Morado': return 10000000;
      case 'Gris': return 100000000;
      case 'Blanco': return 1000000000;
      default: return 1;
    }
  }

  calcular() {
    this.c1 = this.valorColor(this.banda1);
    this.c2 = this.valorColor(this.banda2);
    this.m = this.valorMult(this.mult);
    this.val = (this.c1 * 10 + this.c2) * this.m;

    if (this.tolerancia === 'Dorado') {
      this.min = this.val * 0.95;
      this.max = this.val * 1.05;
    } else if (this.tolerancia === 'Plata') {
      this.min = this.val * 0.90;
      this.max = this.val * 1.10;
    } else {
      this.min = this.val;
      this.max = this.val;
    }

    this.res = {
      val: this.val,
      min: this.min,
      max: this.max
    };

    return this.res;
  }
}
