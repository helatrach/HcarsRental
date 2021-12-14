
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private fb:FormBuilder, private userService : UsersService , private router : Router) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(){
    this.registerForm = this.fb.group({
      email : this.fb.control('',[Validators.email]),
      password : this.fb.control('',[Validators.required]),
      confirmPassword : this.fb.control('',[Validators.required]),
      firstName : this.fb.control('',[Validators.required]),
      lastName : this.fb.control('',[Validators.required]),
      dateOfBirth : this.fb.control(''),
      phoneNumber : this.fb.control('',[Validators.required]),
    })
  }

  onSubmit(){
    const emailInput = this.registerForm.get('email').value;
    const passwordInput = this.registerForm.get('password').value;
    const confirmPasswordInput = this.registerForm.get('confirmPassword').value;
    const firstNameInput = this.registerForm.get('firstName').value;
    const lastNameInput = this.registerForm.get('lastName').value;
    const dateOfBirthInput = this.registerForm.get('dateOfBirth').value;
    const phoneNumberInput = this.registerForm.get('phoneNumber').value;

    const newUser : User={
      email : emailInput,
      password : passwordInput,
      confirmPassword : confirmPasswordInput,
      firstName : firstNameInput,
      lastName : lastNameInput,
      dateOfBirth : dateOfBirthInput,
      phoneNumber : phoneNumberInput

    }

    this.userService.CreateAccount(newUser).then(
      (data)=> {
        this.router.navigate(['/rental']);
      }
    ).catch(
      (error)=> {
        console.log("error");
      }
    )
  }

}
