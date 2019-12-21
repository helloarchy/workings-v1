import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {FieldBase} from '../field-base';

@Component({
  selector: 'app-field',
  templateUrl: './dynamic-form-field.component.html'
})

export class DynamicFormFieldComponent {
  @Input() field: FieldBase<any>;
  @Input() job: FormGroup;

  ngOnInit() {
    let msg: string = "";
    msg += "DEBUG: Field creation\n";
    msg += "job = " + this.job

    console.log("");

  }

  get isValid() {
    /* TODO: Debug when undefined */
    //return this.job.controls[this.field.key].valid;
    if (!this.job.controls[this.field.key] == undefined) {
      return this.job.controls[this.field.key].valid
    } else {
      return false
    }
  }
}
