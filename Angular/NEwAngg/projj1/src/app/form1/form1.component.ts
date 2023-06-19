import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  firstname = '';
  terms = false;
  option = '';
  type = '';
  val1 = 'default value';
  val2 = 'inputbox';
  description = '';

  fun1(formValue: NgForm) {
    console.log(formValue.value);
  }

  resetForm(value: NgForm) {
    value.reset();
  }

  setValue(value: NgForm) {
    let details = {
      firstname: 'newName',
      terms: true,
      type: 'option three'
    };
  }
}
