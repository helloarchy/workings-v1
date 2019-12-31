import {FieldBase} from './field-base';

export class QuantityField extends FieldBase<string> {
  control_type = 'quantity';
  min: number = 0;
  max: number = Number.MAX_VALUE;
  step: number = 1;

  constructor(options: {} = {}) {
    super(options);
    this.min = options['min'] || 0;
    this.max = options['max'] || Number.MAX_VALUE;
    this.step = options['step'] || 1;
  }
}
