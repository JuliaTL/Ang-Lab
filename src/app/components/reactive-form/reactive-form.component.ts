import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  signupForm: FormGroup;
  submitted: boolean = false;
  forbiddenName = 'John';

  constructor() { }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        'username': new FormControl(null, [Validators.required, this.checkForbiddenName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'question': new FormControl('car'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm.value.userData.email);
    this.submitted = true;
  }
  checkForbiddenName(control: FormControl): {[k: string]: boolean} {
    if(this.forbiddenName.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}
    }
    return null;
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    const formHobbies =  this.signupForm.get('hobbies') as FormArray;
    formHobbies.push(control);
  }
}
