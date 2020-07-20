import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {NamesValidationService} from "../../utils/signup.validator";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  signupForm: FormGroup;
  submitted= false;
  forbiddenName = 'John';

  constructor(private namesValidation: NamesValidationService) { }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        'username': new FormControl(null, [
                                                      Validators.required,
                                                      this.checkForbiddenName.bind(this),
                                                      Validators.minLength(3)],
                                        [this.namesValidator.bind(this)],
        ),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'question': new FormControl('car'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    this.submitted = true;
    setTimeout(()=>
        this.signupForm.reset(),
      3000)

  }
  checkForbiddenName(control: FormControl): {[k: string]: boolean} {
    if(this.forbiddenName.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}
    }
    return null;
  }
  namesValidator(control: FormControl): Observable<ValidationErrors> {
    return this.namesValidation.validateUserName(control.value);
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    const formHobbies =  this.signupForm.get('hobbies') as FormArray;
    formHobbies.push(control);
  }
}
