import {Component} from '@angular/core';
import {FieldService} from "./field.service";
import {FieldBase} from "./field-base";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [FieldService]
})

export class AppComponent {
  title = 'app';
  field_groups: FieldBase<any>[][];

  constructor(service: FieldService) {
    this.field_groups = service.get_field_groups();
  }
}
