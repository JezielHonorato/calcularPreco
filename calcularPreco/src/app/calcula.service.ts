import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculaService {
  private resultado: number | undefined;

  constructor() {

    this.resultado = undefined
  }
  calcular(alc: number, gas: number) {

    if (alc > 0 && gas > 0) {
      this.resultado = alc / gas
      return true
    }
    return false
  }
  obterResultado(): number | undefined {
    return this.resultado
  }
}