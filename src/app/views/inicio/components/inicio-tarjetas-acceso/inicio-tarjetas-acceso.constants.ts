import { ModuloInterface } from './interfaces/modulo.interface';

export class InicioTarjetasAccesoConstants {
  
  public static MODULOS: Array<ModuloInterface> = [
    {
      titulo: 'Repostería',
      descripcion: 'En esta aplicación de repostería encontrarás todas las variedades de tortas que prefieres para tu familia y amigos',
      url: '#/reposteria',
      img: 'torta_chocolate_fresa.jpg'
    },   
    {
      titulo: 'Juguetería',
      descripcion: 'En esta aplicación encontrarás mutiples juguetes para bebés y para niños con los últimos modelos',
      url: '#/jugueteria',
      img: 'tortuga.jpg'
    },   
    {
      titulo: 'Tecnologia',
      descripcion: 'En esta aplicacion encontrara dieferentes dispositivos moviles y laptops con las caracteristicas que usted necesita',
      url: '#/tecnologia',
      img: 'motog9.jpg'
    },  
    {
      titulo: 'Moda',
      descripcion: 'En esta aplicacion encontrara dieferentes productos de belleza,ropa y accesorios la variedad que usted necesita',
      url: '#/moda',
      img: 'nars.jpg'
    }
  ]; 
}