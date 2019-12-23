import {Injectable} from '@angular/core';

import {DropdownField} from './field-dropdown';
import {TextboxField} from './field-textbox';
import {FieldGroup} from "./field-group";

@Injectable()
export class JobService {
  get_field_groups() {
    let job: Array<FieldGroup> = [

      /* DETAILS */
      new FieldGroup("Details", [
        /* Client */
        new TextboxField({
          key: 'client',
          label: 'Client',
          value: '',
          required: true
        }),
        /* Customer */
        new TextboxField({
          key: 'customer',
          label: 'Customer',
          value: '',
          required: true
        }),
        /* Reference */
        new TextboxField({
          key: 'reference',
          label: 'Reference',
          value: '',
          required: true
        }),
        /* Number of blinds */
        new TextboxField({
          key: 'num_blinds',
          label: 'Number of blinds',
          value: '1',
          type: 'number',
          required: true
        }),
      ]),

      /* DIMENSION */
      new FieldGroup("Dimensions", [
        /* Width */
        new TextboxField({
          key: 'width',
          label: 'Width',
          value: '123.4',
          type: 'number',
          required: true
        }),
        /* Height */
        new TextboxField({
          key: 'height',
          label: 'Height',
          value: '123.4',
          type: 'number',
          required: true
        }),
        /* Number of widths */
        new TextboxField({
          key: 'num_widths',
          label: 'Number of widths',
          value: '1',
          type: 'number'
        })
      ]),

      /* FABRIC */
      new FieldGroup("Fabric", [
        /* Width */
        new TextboxField({
          key: 'width',
          label: 'Width',
          value: '123.4',
          type: 'number'
        }),
        /* Repeat */
        new TextboxField({
          key: 'repeat',
          label: 'Repeat',
          value: '12.3',
          type: 'number'
        })
      ]),

      /* LININGS */
      new FieldGroup("Linings", [
        /* Inner */
        new TextboxField({
          key: 'inner',
          label: 'Inner',
          value: ''
        }),
        /* Outer */
        new TextboxField({
          key: 'outer',
          label: 'Outer',
          value: ''
        }),
      ]),

      /* RAILING */
      new FieldGroup("Railing", [
        /* Type */
        new TextboxField({
          key: 'type',
          label: 'Type',
          value: ''
        }),
        /* Depth */
        new TextboxField({
          key: 'depth',
          label: 'Depth',
          value: '',
          type: 'number'
        })
      ]),

      /* STACK */
      new FieldGroup("Stack", [
        /* Type */
        new TextboxField({
          key: 'type',
          label: 'Type',
          value: 'Normal',
          required: true
        }),
        /* TODO: Compensate for waterfall et al */
        /* Folds */
        new TextboxField({
          key: 'folds',
          label: 'Folds',
          value: '4',
          type: 'number'
        })
      ]),

      /* POCKETS */
      new FieldGroup("Pockets", [
        /* Depth */
        new TextboxField({
          key: 'depth',
          label: 'Depth',
          value: ''
        })
      ]),

      /* RINGS */
      new FieldGroup("Rings", [
        /* Type */
        new TextboxField({
          key: 'type',
          label: 'Type',
          value: ''
        }),
        /* Margin */
        new TextboxField({
          key: 'margin',
          label: 'Margin',
          value: ''
        }),
        /* Count */
        new TextboxField({
          key: 'count',
          label: 'Count',
          value: ''
        })
      ]),
    ];

    return job
  };
}
