import {FieldBase} from "./field-base";

/**
 * Container for lists of type FieldBase, namely for grouping form fields into
 * logical blocks of related inputs.
 */
export class FieldGroup {
  private _key: string;
  private _group: Array<FieldBase<any>>;

  constructor(key?: string, group?: Array<FieldBase<any>>) {
    this._key = key;
    this._group = group;
  }

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get group(): Array<FieldBase<any>> {
    return this._group;
  }

  set group(value: Array<FieldBase<any>>) {
    this._group = value;
  }
}
