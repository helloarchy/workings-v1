import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit() {

  }

  updateName() {
    this.name.setValue('Nancy');
  }

}
