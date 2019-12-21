import { Injectable }   from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { FieldBase } from './field-base';

@Injectable()
export class FieldControlService {
  constructor() { }

  to_form_group(field_groups: FieldBase<any>[][] ) {
    let groups: any = {};
    field_groups.forEach((field_group, i) => {
      console.log("Field group to string = " + field_group.toString()); // TODO: DEBUG
      let group: any = {};
      field_group.forEach((field, j) => {
        console.log("Field value = " + field.value); // TODO: DEBUG
        if (field.required) {
          group[j] = new FormControl(field.value || '', Validators.required);
        } else {
          group[j] = new FormControl(field.value || '');
        }
      });

      groups[i] = new FormGroup(group);
    });

    let fb = new FormBuilder();
    return fb.group(groups)
  }
}
