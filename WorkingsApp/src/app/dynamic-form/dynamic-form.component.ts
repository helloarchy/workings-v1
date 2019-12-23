import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {FieldControlService} from '../field-control.service';
import {FieldGroup} from "../field-group";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [FieldControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() job: Array<FieldGroup> = [];
  job_groups: FormGroup; // Parse to form group
  payLoad = '';

  constructor(private fcs: FieldControlService) {
  }

  ngOnInit() {
    console.log("TRYING TO FORM GROUP");
    this.job_groups = this.fcs.to_form_group(this.job);
  }

  onSubmit() {
    // this.payLoad = JSON.stringify(this.job_groups.value);
    // this.payLoad = JSON.stringify(this.job_groups);
    console.log("Submit")
  }

  /*
  import { Component, Input, OnInit }  from '@angular/core';
  import { FormGroup }                 from '@angular/forms';

  import { FieldBase }              from '../field-base';
  import { FieldControlService }    from '../field-control.service';

  @Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ FieldControlService ]
  })
  export class DynamicFormComponent implements OnInit {

    @Input() fields: FieldBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: FieldControlService) {  }

    ngOnInit() {
      this.form = this.qcs.toFormGroup(this.fields);
    }

    onSubmit() {
      this.payLoad = JSON.stringify(this.form.value);
    }
  }
  }*/
}
