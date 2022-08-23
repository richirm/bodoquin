import { ControlFormularioInterface } from '../interfaces/ControlFormulario.interface';

export class SorporteConstants {
  
  static FORMULARIO_CONTROLES: Array<ControlFormularioInterface> = [
    {
      id: 'codProducto',
      label: 'Código Producto',
      tipo: 'input'
    },  
    {
      id: 'nomProducto',
      label: 'Nombre Producto',
      tipo: 'input'
    },
    {
      id: 'descripcion',
      label: 'Descripcion',
      tipo: 'textarea'
    },
    {
      id: 'fecha',
      label: 'Fecha',
      tipo: 'input'
    }   
  ];
  
}