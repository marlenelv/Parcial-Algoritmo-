import { Injectable } from '@angular/core';
import { Producto } from './producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    { nombre: 'Avena Integral',   categoria: 'Cereales',      precio: 650,  disponible: true,  imagen: 'assets/img/avena.webp'        },
    { nombre: 'Granola',          categoria: 'Cereales',      precio: 980,  disponible: true,  imagen: 'assets/img/granola.webp'      },
    { nombre: 'Semillas de Chía', categoria: 'Semillas',      precio: 750,  disponible: false, imagen: 'assets/img/chia.webp'         },
    { nombre: 'Miel Orgánica',    categoria: 'Endulzantes',   precio: 1200, disponible: true,  imagen: 'assets/img/miel.webp'         },
    { nombre: 'Almendras',        categoria: 'Frutos Secos',  precio: 1800, disponible: true,  imagen: 'assets/img/almendras.webp'    },
    { nombre: 'Nueces',           categoria: 'Frutos Secos',  precio: 2100, disponible: true,  imagen: 'assets/img/nueces.webp'       },
    { nombre: 'Pasas de Uva',     categoria: 'Frutas Secas',  precio: 650,  disponible: false, imagen: 'assets/img/pasas.webp'        },
    { nombre: 'Mix de Semillas',  categoria: 'Semillas',      precio: 900,  disponible: true,  imagen: 'assets/img/mix-semillas.webp' }
  ];

  getProductos(): Producto[] {
    return this.productos;
  }
}
