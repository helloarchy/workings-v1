import { Component } from '@angular/core';

import {FieldService} from "./field.service";

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [fields]="fields"></app-dynamic-form>
    </div>
  `,
  providers:  [FieldService]
})
export class AppComponent {
  fields: any[];

  constructor(service: FieldService) {
    this.fields = service.get_fields();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
