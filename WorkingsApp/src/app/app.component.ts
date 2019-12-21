import {Component} from '@angular/core';
import {FieldService} from "./field.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [FieldService]
})

export class AppComponent {
  title = 'app';
  fields: any[];

  constructor(service: FieldService) {
    this.fields = service.get_fields();
  }
}
