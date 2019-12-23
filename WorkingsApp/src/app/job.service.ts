import {Injectable} from '@angular/core';

import {DropdownField} from './field-dropdown';
import {TextboxField} from './field-textbox';
import {FieldGroup} from "./field-group";

@Injectable()
export class JobService {
  get_field_groups() {
    let job: Array<FieldGroup> = [
      new FieldGroup("Details", [
        new DropdownField({
          key: 'brave',
          label: 'Bravery Rating',
          options: [
            {key: 'solid', value: 'Solid'},
            {key: 'great', value: 'Great'},
            {key: 'good', value: 'Good'},
            {key: 'unproven', value: 'Unproven'}
          ]
        }),
        new TextboxField({
          key: 'firstName',
          label: 'First name',
          value: 'Bombasto',
          required: true
        }),
        new TextboxField({
          key: 'emailAddress',
          label: 'Email',
          type: 'email'
        })
      ]),
      new FieldGroup("Dimensions", [
        new TextboxField({
          key: 'width',
          label: 'Width',
          value: '123.4',
          required: true
        }),
      ]),
      new FieldGroup("Batty boo", [
        new TextboxField({
          key: 'name',
          label: 'name',
          value: 'derp',
          required: true
        })
      ])
    ];

    return job
  };
}
