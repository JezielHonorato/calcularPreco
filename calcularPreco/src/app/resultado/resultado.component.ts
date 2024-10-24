import { Component } from '@angular/core';
import { CalculaService } from '../calcula.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {
  constructor (public cs: CalculaService){
    
  }
}
