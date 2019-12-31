import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {FieldBase} from '../field-base';
import {SelectField} from "../field-select";
import {TextboxField} from "../field-textbox";
import {FieldGroup} from "../field-group";

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
  @Input() group: FieldGroup;

  ngOnInit() {
    if (this.field.control_type == "textbox") {
      this.field = this.field as TextboxField;
    } else if (this.field.control_type == "select") {
      this.field = this.field as SelectField;
    }

    /* Check for stack type hidden sub controls */
    this.on_change();
  }

  get is_valid() {
    return this.job.controls[this.group.key]['controls'][this.field.key].valid;
  }

  on_change(): void {
    if (this.group.key == "Stack" && this.field.key == "type") {
      console.log(`Stack type value = ${this.job.get('Stack').get('type').value}`);
      this.job.get('Stack').get('type').valueChanges.subscribe(val => {
        console.log(`Value change = ${val}`);
        if (val == "waterfall") {
          this.group.group.find(e => e.key === 'increment').hidden = false;
          this.group.group.find(e => e.key === 'reveal').hidden = true;
        }
        else if (val == "showing_hem") {
          this.group.group.find(e => e.key === 'increment').hidden = true;
          this.group.group.find(e => e.key === 'reveal').hidden = false;
        }
        else if (val == "normal") {
          this.group.group.find(e => e.key === 'increment').hidden = true;
          this.group.group.find(e => e.key === 'reveal').hidden = true;
        }
      });
    }
  }

  get_options() {
    let temp: SelectField = this.field as SelectField;
    return temp.options
  }

  get_type() {
    let temp: TextboxField = this.field as TextboxField;
    return temp.type
  }
}
