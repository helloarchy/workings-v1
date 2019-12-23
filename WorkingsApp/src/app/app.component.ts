import {Component} from '@angular/core';
import {JobService} from "./job.service";
import {FieldGroup} from "./field-group";

/**
 * Main component for the app
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [JobService]
})

export class AppComponent {
  title = 'app';
  job: Array<FieldGroup> = [];

  constructor(service: JobService) {
    this.job = service.get_field_groups();
  }
}
