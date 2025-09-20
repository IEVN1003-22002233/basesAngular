import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operas-bas',
  imports: [CommonModule, FormsModule],
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
num1:string='';
num2:string='';
resultado:number=0;
operacionSeleccionada: string = '';

operacion(): void {
  const n1 = parseInt(this.num1);
  const n2 = parseInt(this.num2);

  switch (this.operacionSeleccionada) {
    case 'suma':
      this.resultado = n1 + n2;
      break;
    case 'resta':
      this.resultado = n1 - n2;
      break;
    case 'division':
      this.resultado = n1 / n2;
      break;
    case 'multiplicar':
      this.resultado = n1 * n2;
      break;
    default:
  }
}

}
