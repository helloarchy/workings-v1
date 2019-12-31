import {FieldBase} from './field-base';

export class MeasureField extends FieldBase<string> {
  control_type = 'number';
  unit: string;

  constructor(options: {} = {}) {
    super(options);
    this.unit = options['unit'] || '';
  }
}
