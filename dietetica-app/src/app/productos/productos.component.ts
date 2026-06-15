import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos = [
    { nombre: 'Proteína Whey', precio: 3500 },
    { nombre: 'Vitamina C', precio: 800 },
    { nombre: 'Omega 3', precio: 1200 },
    { nombre: 'Multivitamínico', precio: 950 }
  ];
}
