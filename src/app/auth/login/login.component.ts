import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/models/user-response';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private fb: FormBuilder , private userService : UsersService , private router : Router) { }

  ngOnInit(): void {
    this.initFormLogin();
  }

  initFormLogin(): void{

    this.loginForm = this.fb.group({
      email : this.fb.control('', Validators.email),
      password : this.fb.control('',Validators.minLength(5))
    });

  }

  onSubmit() : void{
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.userService.login(email,password).then(
      (data : UserResponse) => {
        this.router.navigate(['/rental']);
      }
    ).catch(
      (error) => {
        console.log("error" + error);
      }
    )


  }







}
