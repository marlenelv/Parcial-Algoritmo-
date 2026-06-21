import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  categorias = [
    {
      emoji: '🌾',
      nombre: 'Cereales',
      descripcion: 'Avena, granola y granos integrales para tu energía diaria.'
    },
    {
      emoji: '🥜',
      nombre: 'Frutos Secos',
      descripcion: 'Almendras, nueces y frutos llenos de grasas saludables.'
    },
    {
      emoji: '🌱',
      nombre: 'Semillas',
      descripcion: 'Chía y mix de semillas ricas en omega 3 y fibra natural.'
    }
  ];
}
