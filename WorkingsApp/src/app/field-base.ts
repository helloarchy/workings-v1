/**
 * Superclass for all field types for the form
 */
export class FieldBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  control_type: string;
  hidden: boolean;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    control_type?: string,
    hidden?: boolean
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.control_type = options.control_type || '';
    this.hidden = !!options.hidden;
  }
}
