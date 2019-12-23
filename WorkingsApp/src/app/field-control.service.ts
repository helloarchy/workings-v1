import { Injectable }   from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {logger} from "codelyzer/util/logger";
import {log} from "util";

@Injectable()
export class FieldControlService {
  constructor() { }

  /**
   * Take a job list and return an Angular FormGroup
   * @param job
   * @return FormGroup
   */
  to_form_group(job: Array<any> ) {
    console.log("TRYING REALLY HARD. SORRY");

    console.log("DEBUG:\n");

    /* Groups */
    let job_form_group: any = {}; // Compile into FormGroup later
    job.forEach((group, i) => {

      let group_form_group: any = {};

      console.log(`job_group ${i} size = ${job_form_group.length}, has group ${group.key}`);


      group.group.forEach(field => {
        group_form_group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
          : new FormControl(field.value || '');
      });


      /* Fields */
      group.group.forEach((field, j) => {
        console.log(`\t field_group ${j}, has ${field.key}, required? ${field.required}`);

        if (field.required) {
          group_form_group[field.key] = new FormControl(field.value || '', Validators.required);
        } else {
          group_form_group[field.key] = new FormControl(field.value || '');
        }
      });

      console.log(`Adding group of length = ${group_form_group.length} to job form group`);

      /* Group FormControls into FormGroup and add that group to the overall Job FormGroup */
      job_form_group[group.key] = new FormGroup(group_form_group); // TODO: DEBUG, THIS LINE CRASHES EVERYTHING
      //let test = new FormGroup(group_form_group);
      console.log(`did test pass?`);

      console.log(`job form group is now size = ${job_form_group.length}`);
    });

    return new FormGroup(job_form_group) // Parse to FormGroup
  }


  /* Original:
  import { Injectable }   from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';

  import { FieldBase } from './field-base';

  @Injectable()
  export class FieldControlService {
    constructor() { }

    toFormGroup(fields: FieldBase<any>[] ) {
      let group: any = {};

      fields.forEach(field => {
        group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
          : new FormControl(field.value || '');
      });
      return new FormGroup(group);
    }
  }
  */
}
