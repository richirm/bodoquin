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
      label: 'Direccion',
      tipo: 'input'
    },
    {
      id: 'correo',
      label: 'Correo',
      tipo: 'input'
    },
    {
      id: 'telefono',
      label: 'Teléfono',
      tipo: 'input'
    },
    {
      id: 'descripcion',
      label: 'Descripcion',
      tipo: 'textarea'
    }
  ];
  
}