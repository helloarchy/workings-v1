import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {FieldBase} from '../field-base';
import {DropdownField} from "../field-dropdown";
import {TextboxField} from "../field-textbox";

/**
 * Component for each individual field within the form
 */
@Component({
  selector: 'app-field',
  templateUrl: './dynamic-form-field.component.html'
})

export class DynamicFormFieldComponent {
  @Input() field: FieldBase<any>;
  @Input() job: FormGroup;
  @Input() group: string;

  ngOnInit() {
    if (this.field.control_type == "textbox") {
      this.field = this.field as TextboxField;
    } else if (this.field.control_type == "dropdown") {
      this.field = this.field as DropdownField;
    }
  }

  get is_valid() {
    return this.job.controls[this.group]['controls'][this.field.key].valid;
  }

  get_options() {
    let temp: DropdownField = this.field as DropdownField;
    return temp.options
  }

  get_type() {
    let temp: TextboxField = this.field as TextboxField;
    return temp.type
  }
}
