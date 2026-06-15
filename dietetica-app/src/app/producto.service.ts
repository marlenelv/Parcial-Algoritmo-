import { Injectable } from '@angular/core';
import { Producto } from './producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    { nombre: 'Avena Integral',    categoria: 'Cereales',    precio: 650,  disponible: true  },
    { nombre: 'Granola',           categoria: 'Cereales',    precio: 980,  disponible: true  },
    { nombre: 'Semillas de Chía',  categoria: 'Semillas',    precio: 750,  disponible: false },
    { nombre: 'Miel Orgánica',     categoria: 'Endulzantes', precio: 1200, disponible: true  },
    { nombre: 'Almendras',         categoria: 'Frutos Secos',precio: 1800, disponible: true  }
  ];

  getProductos(): Producto[] {
    return this.productos;
  }
}
