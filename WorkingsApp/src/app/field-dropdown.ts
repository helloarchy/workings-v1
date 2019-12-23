import {FieldBase} from "./field-base";

export class DropdownField extends FieldBase<string> {
  control_type = 'dropdown';
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
