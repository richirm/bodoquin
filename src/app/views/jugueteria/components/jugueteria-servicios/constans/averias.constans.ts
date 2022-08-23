import { ControlFormularioInterface } from '../interfaces/ControlFormulario.interface';

export class AveriasConstans {

  static FORMULARIO_CONTROLES: Array<ControlFormularioInterface> = [
          {
            id: 'nombre',
            label: 'Nombre',
            tipo: 'input'
          },
          {
            id: 'averiaMax',
            label: 'Averías Máximo',
            tipo: 'input'
          },
          {
            id: 'numSerie',
            label: 'Número de serie',
            tipo: 'input'
          },
          {
            id: 'hora',
            label: 'hora',
            tipo: 'input'
          },
          {
            id: 'descripcion',
            label: 'Descripción',
            tipo: 'textarea'
          }
        ];
}