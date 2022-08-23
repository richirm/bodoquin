import { ControlFormularioInterface } from '../interfaces/ControlFormulario.interface';

export class SoporteConstants {
  
  static FORMULARIO_CONTROLES: Array<ControlFormularioInterface> = [
    {
      id: 'codProducto',
      label: 'Codigo Producto',
      tipo: 'input'
    },
    
    {
      id: 'nomProducto',
      label: 'Nombre Producto',
      tipo: 'input'
    },
    {
      id: 'fecha',
      label: 'Fecha',
      tipo: 'input'
    },
    
    {
      id: 'hora',
      label: 'Hora',
      tipo: 'input'
    },
    
    {
      id: 'descripcion',
      label: 'Descripcion',
      tipo: 'textarea'
    }
    
  ];
}