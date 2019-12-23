import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

/**
 * Parse a JobService list into an Angular FormGroup form
 */
@Injectable()
export class FieldControlService {
  constructor() {
  }

  /**
   * Take a job list and return an Angular FormGroup
   * @param job
   * @return FormGroup
   */
  to_form_group(job: Array<any>) {
    /* Groups */
    let job_form_group: any = {}; // Compile into FormGroup later
    job.forEach(group => {
      /* Fields */
      let group_form_group: any = {};
      group.group.forEach(field => {
        if (field.required) {
          group_form_group[field.key] = new FormControl(field.value || '', Validators.required);
        } else {
          group_form_group[field.key] = new FormControl(field.value || '');
        }
      });
      /* Group FormControls into FormGroup and add that group to the overall Job FormGroup */
      job_form_group[group.key] = new FormGroup(group_form_group);
    });
    return new FormGroup(job_form_group) // Parse to FormGroup
  }
}
