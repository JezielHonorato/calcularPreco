import { Component } from '@angular/core';
import { CalculaService } from '../calcula.service';

@Component({
  selector: 'app-precos',
  templateUrl: './precos.component.html',
  styleUrl: './precos.component.css'
})
export class PrecosComponent {
alc: any;
  constructor (private cs: CalculaService) {}
  calcular(alcool: number, gasolina: number) {
    this.cs.calcular(alcool, gasolina)
  }
}
