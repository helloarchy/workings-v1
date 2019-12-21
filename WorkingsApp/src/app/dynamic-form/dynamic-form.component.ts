import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {FieldBase} from '../field-base';
import {FieldControlService} from '../field-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [FieldControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() field_groups: FieldBase<any>[][] = [];
  job: FormGroup;
  payLoad = '';

  constructor(private fcs: FieldControlService) {
  }

  ngOnInit() {
    this.job = this.fcs.to_form_group(this.field_groups);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.job.value);
  }

  /*
  @Input() fields: FieldBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FieldControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }*/
}
