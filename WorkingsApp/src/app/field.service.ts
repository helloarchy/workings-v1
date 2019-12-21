import { Injectable }       from '@angular/core';

import { DropdownField } from './field-dropdown';
import { FieldBase }     from './field-base';
import { TextboxField }  from './field-textbox';

@Injectable()
export class FieldService {

  // TODO: get from a remote source of field metadata
  // TODO: make asynchronous
  get_field_groups() {
    let field_groups: FieldBase<any>[][] = [
      [
        new DropdownField({
          key: 'brave',
          label: 'Bravery Rating',
          options: [
            {key: 'solid',  value: 'Solid'},
            {key: 'great',  value: 'Great'},
            {key: 'good',   value: 'Good'},
            {key: 'unproven', value: 'Unproven'}
          ],
          order: 3
        }),

        new TextboxField({
          key: 'firstName',
          label: 'First name',
          value: 'Bombasto',
          required: true,
          order: 1
        }),

        new TextboxField({
          key: 'emailAddress',
          label: 'Email',
          type: 'email',
          order: 2
        })
      ]
    ];

    return field_groups
  }
}
