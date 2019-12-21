import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})

export class ControlComponent implements OnInit {
  job = this.fb.group({
    details: this.fb.group({
      client: ['', Validators.required],
      customer: ['', Validators.required],
      reference: ['', Validators.required],
      num_blinds: ['', Validators.required]
    }),
    dimensions: this.fb.group({
      width: ['', Validators.required],
      height: ['', Validators.required],
      num_widths: ['']
    }),
    railing: this.fb.group({
      type: [''],
      depth: ['']
    }),
    stack: this.fb.group({
      type: [''],
      folds: ['']
    })
  });

  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
    this.job.valueChanges.subscribe(
      new_value => console.log(new_value)
    )
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.job.value);
  }

  updateProfile() {
    this.job.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  get aliases() {
    return this.job.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
