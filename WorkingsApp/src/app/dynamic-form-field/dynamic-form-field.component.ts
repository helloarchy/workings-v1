import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {FieldBase} from '../field-base';
import {DropdownField} from "../field-dropdown";
import {TextboxField} from "../field-textbox";

@Component({
  selector: 'app-field',
  templateUrl: './dynamic-form-field.component.html'
})

export class DynamicFormFieldComponent {
  @Input() field: FieldBase<any>;
  @Input() job: FormGroup;

  ngOnInit() {
    if (this.field.control_type == "textbox") {
      this.field = this.field as TextboxField;
    } else if (this.field.control_type == "dropdown") {
      this.field = this.field as DropdownField;
    }
  }

  get isValid() {
    for (let group in this.job.controls) {
      if (this.job.controls[group]['controls'][this.field.key].valid) {
        console.log(this.field.key + " is valid");
        return true;
      } else {
        console.log(this.field.key + " is NOT valid");
        return false
      }
    }
  }

  get_options() {
    let temp: DropdownField = this.field as DropdownField;
    for (let opt of temp.options) {
      console.log(`Option ${opt.key} = ${opt.value}`)
    }
    return temp.options
  }

  get_type() {
    let temp: TextboxField = this.field as TextboxField;
    return temp.type
  }
}


/* Original:
import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {FieldBase} from '../field-base';

@Component({
  selector: 'app-field',
  templateUrl: './dynamic-form-field.component.html'
})

export class DynamicFormFieldComponent {
  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.field.key].valid;
  }
}
*/
