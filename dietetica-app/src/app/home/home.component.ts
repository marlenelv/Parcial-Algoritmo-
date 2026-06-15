import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titulo = 'Dietética Salud Natural';
  bienvenida = 'Bienvenido a nuestra tienda de productos naturales y saludables.';
  descripcion = 'Ofrecemos una amplia variedad de productos dietéticos, suplementos y alimentos naturales para cuidar tu salud.';
}
