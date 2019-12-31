import {Injectable} from '@angular/core';

import {SelectField} from './field-select';
import {TextboxField} from './field-textbox';
import {FieldGroup} from "./field-group";
import {MeasureField} from "./field-measure";
import {QuantityField} from "./field-quantity";

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
        new QuantityField({
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
        new MeasureField({
          key: 'width',
          label: 'Width',
          value: '123.4',
          required: true
        }),
        /* Height */
        new MeasureField({
          key: 'height',
          label: 'Height',
          value: '123.4',
          required: true
        }),
        /* Number of widths */
        new QuantityField({
          key: 'num_widths',
          label: 'Number of widths',
          value: '1',
        })
      ]),

      /* FABRIC */
      new FieldGroup("Fabric", [
        /* Width */
        new MeasureField({
          key: 'width',
          label: 'Width',
          value: '123.4',
        }),
        /* Repeat */
        new MeasureField({
          key: 'repeat',
          label: 'Repeat',
          value: '12.3',
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
        new MeasureField({
          key: 'depth',
          label: 'Depth',
          value: '',
        })
      ]),

      /* STACK */
      new FieldGroup("Stack", [
        /* Type */
        new SelectField({
          key: 'type',
          label: 'Type',
          value: 'normal',
          required: true,
          options: [
            {key: 'normal', value: 'Normal'},
            {key: 'waterfall', value: 'Waterfall'},
            {key: 'showing_hem', value: 'Showing Hem'}
          ]
        }),

        /* Waterfall increment (if type) */
        new MeasureField({
          key: 'increment',
          label: 'Increment',
          value: '2.5',
          hidden: true
        }),

        /* Showing hem reveal (if type) */
        new MeasureField({
          key: 'reveal',
          label: 'Reveal',
          value: '2.5',
          hidden: true
        }),

        /* Folds */
        new QuantityField({
          key: 'folds',
          label: 'Folds',
          value: '4',
        })
      ]),

      /* POCKETS */
      new FieldGroup("Pockets", [
        /* Depth */
        new MeasureField({
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
        new MeasureField({
          key: 'margin',
          label: 'Margin',
          value: ''
        }),
        /* Count */
        new QuantityField({
          key: 'count',
          label: 'Count',
          value: '',
          min: 2,
        })
      ]),
    ];

    return job
  };
}
