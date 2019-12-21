import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FieldBase }     from '../field-base';

@Component({
  selector: 'app-field',
  templateUrl: './dynamic-form-field.component.html'
})

export class DynamicFormFieldComponent {
  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
