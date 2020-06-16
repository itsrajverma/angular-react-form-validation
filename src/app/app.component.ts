import {Component, OnInit} from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactive-form';

  registerForm : FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      password : ['',Validators.required],
      confirmPassword : ['',Validators.required],
    })
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    console.log(this.registerForm);
    if(this.registerForm.invalid){
      return;
    }

    console.table(this.registerForm.value);

  }


}
