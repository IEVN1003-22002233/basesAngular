import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  imports: [CommonModule, FormsModule],
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  tarjeta: string = '';
  accionSeleccionada: string = '';
  boleta: number = 12;
  resultado: number = 0;
  cantidadBoletas: string = '';
  cantDescuento: number = 0;
  compradores: string = '';
  cant: number = 0;
  comp: number = 0;

  procesar(): void {
    if (!this.boletasPersonas()) {
      alert('No se pueden comprar más de 7 boletas por persona.');
      return;
    }
    this.descuento();
    this.precioTotal();
  }

  descuento(): void {
    const cantidad = parseInt(this.cantidadBoletas) || 0;
    if (cantidad > 5) {
      this.cantDescuento = this.boleta * cantidad * 0.85;
    } else if (cantidad > 2 && cantidad <= 5) {
      this.cantDescuento = this.boleta * cantidad * 0.90;
    } else {
      this.cantDescuento = this.boleta * cantidad;
    }
  }

  precioTotal(): void {
    switch (this.tarjeta) {
      case 'si':
        this.resultado = this.cantDescuento * 0.90;
        break;
      case 'no':
        this.resultado = this.cantDescuento;
        break;
    }
  }

  maxBoletas(): number {
      return this.comp * 7;
    }
  boletasPersonas(): boolean {
    this.cant = Number(this.cantidadBoletas);
    this.comp = Number(this.compradores);
    return this.cant <= this.comp * 7;
  }


  resetear(): void {
    this.tarjeta = '';
    this.accionSeleccionada = '';
    this.boleta = 12;
    this.resultado = 0;
    this.cantidadBoletas = '';
    this.cantDescuento = 0;
    this.compradores = '';
    this.cant = 0;
    this.comp = 0;
  }
}
