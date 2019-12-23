import {FieldBase} from "./field-base";

/**
 * Select field
 */
export class SelectField extends FieldBase<string> {
  control_type = 'select';
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
