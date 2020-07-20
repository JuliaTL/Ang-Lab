import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @ViewChild('form') form: NgForm;
  defaultQuestion = 'car';
  submitted = false;

  user = {
    name: '',
    email: '',
    password: '',
    question: '',
  };

  onSubmit() {
    this.submitted = true;
    this.user.name = this.form.value;
    setTimeout(()=>
      this.form.reset(),
      3000)
  }
}
