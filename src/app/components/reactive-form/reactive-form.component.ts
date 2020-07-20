import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  signupForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'question': new FormControl('car')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
