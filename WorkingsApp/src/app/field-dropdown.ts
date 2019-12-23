import {FieldBase} from "./field-base";

/**
 * Dropdown field
 */
export class DropdownField extends FieldBase<string> {
  control_type = 'dropdown';
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
