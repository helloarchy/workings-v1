import {FieldBase} from './field-base';

export class TextboxField extends FieldBase<string> {
  control_type = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
