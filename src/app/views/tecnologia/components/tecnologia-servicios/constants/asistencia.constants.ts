import { ControlFormularioInterface } from '../interfaces/ControlFormulario.interface';

export class AsistenciaConstants {
  
  static FORMULARIO_CONTROLES: Array<ControlFormularioInterface> = [
    {
      id: 'nombre',
      label: 'Nombre',
      tipo: 'input'
    },
    
    {
      id: 'apellidoP',
      label: 'Apellido P',
      tipo: 'input'
    },
    
    {
      id: 'apellidoM',
      label: 'Apellido M',
      tipo: 'input'
    },
    
    {
      id: 'direccion',
      label: 'Dirección',
      tipo: 'input'
    },
    
    {
      id: 'correo',
      label: 'Correo',
      tipo: 'input'
    },
    
    {
      id: 'telefono',
      label: 'Telefono',
      tipo: 'input'
    },
    
    {
      id: 'descripcion',
      label: 'Descripción',
      tipo: 'textarea'
    }
  ];
}