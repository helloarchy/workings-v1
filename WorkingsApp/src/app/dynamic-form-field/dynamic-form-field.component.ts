import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {FieldBase} from '../field-base';
import {SelectField} from "../field-select";
import {TextboxField} from "../field-textbox";
import {FieldGroup} from "../field-group";
import {QuantityField} from "../field-quantity";

/**
 * Component for each individual field within the form
 */
@Component({
  selector: 'app-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css']
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

  /**
   * Listen to form value changes
   */
  on_change(): void {
    this.stack_type_toggle();
  }

  /**
   * Show/hide the relevant fields for the chosen stack type field
   */
  private stack_type_toggle() {
    /* Listen to changes for the Stacks 'type' field */
    if (this.group.key == "Stack" && this.field.key == "type") {
      this.job.get('Stack').get('type').valueChanges.subscribe(val => {

        /* Find the fields */
        let increment = this.group.group.find(e => e.key === 'increment');
        let unit_waterfall = this.group.group.find(e => e.key === 'unit_waterfall');
        let reveal = this.group.group.find(e => e.key === 'reveal');
        let unit_showing_hem = this.group.group.find(e => e.key === 'unit_showing_hem');

        /* Show/hide depending on stack choice */
        if (val == "waterfall") {
          /* Show only waterfall fields */
          increment.hidden = false;
          unit_waterfall.hidden = false;
          reveal.hidden = true;
          unit_showing_hem.hidden = true;
        } else if (val == "showing_hem") {
          /* Show only showing hem fields */
          increment.hidden = true;
          unit_waterfall.hidden = true;
          reveal.hidden = false;
          unit_showing_hem.hidden = false;
        } else if (val == "normal") {
          /* Hide everything */
          increment.hidden = true;
          unit_waterfall.hidden = true;
          reveal.hidden = true;
          unit_showing_hem.hidden = true;
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

  get_step() {
    let temp: QuantityField = this.field as QuantityField;
    return temp.step
  }

  get_min() {
    let temp: QuantityField = this.field as QuantityField;
    return temp.min
  }

  get_max() {
    let temp: QuantityField = this.field as QuantityField;
    return temp.max
  }

  get_quantity(): number {
    let temp: QuantityField = this.field as QuantityField;
    return Number.parseInt(temp.value)
  }

  /**
   * Increment or decrement the Quantity field
   * @param increment, whether to increment or decrement
   */
  do_step(increment: boolean): void {
    let temp: QuantityField = this.field as QuantityField;
    let job_field = this.job.get(this.group.key).get(this.field.key);
    let current_value: number = Number.parseInt(job_field.value);
    if (isNaN(current_value)) current_value = temp.min;

    if (increment && current_value < temp.max) {
      job_field.setValue(current_value + temp.step);
    } else if (!increment && current_value > temp.min) {
      job_field.setValue(current_value - temp.step);
    }
  }
}
