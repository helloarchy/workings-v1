import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {FieldControlService} from '../field-control.service';
import {FieldGroup} from "../field-group";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [FieldControlService]
})

/**
 * Overall root form component
 */
export class DynamicFormComponent implements OnInit {

  @Input() job: Array<FieldGroup> = [];
  job_groups: FormGroup; // Parse to form group
  payLoad = '';

  constructor(private fcs: FieldControlService) {
  }

  ngOnInit() {
    this.job_groups = this.fcs.to_form_group(this.job);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.job_groups.value);
  }
}
