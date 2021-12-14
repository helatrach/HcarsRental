import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { UserResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user : User;
  isAuth = false;
  UserSubject = new Subject<User>();
  private readonly urlLogin : string = `${environment.api_auth + "Login"}`
  private readonly registerLogin : string = `${environment.api_auth + "Register"}`
  constructor(private http : HttpClient) { }

  emitUser(): void{
    this.UserSubject.next(this.user);
  }
  public login(email:string, password: string){
    const body = {
      email : email,
      password : password
    }
    return new Promise(
      (resolve, reject) => {
        this.http.post(this.urlLogin,body).subscribe(
          (data : UserResponse) => {
            if(data.isSuccess){
              console.log(data);

               this.user = <User>  {};
               this.user.email = body.email;
               this.isAuth = true;
               this.emitUser();
               resolve(data.message);
            }else{
              reject(data.message)
            }
          },
          (error) => {
            console.log("error"+error);
            reject(false);
          }
        )

      }
    )
  }


  public CreateAccount(user : User){
    return new Promise(
      (resolve, reject) => {
        this.http.post(this.registerLogin,user).subscribe(
          (data : UserResponse) => {
            if(data.isSuccess){
              this.user = <User>  {};
              this.user.email = user.email;
               this.isAuth = true;
               this.emitUser();
               resolve(data.message);
            }else{
              reject(data.message)
            }
          },
          (error) => {
            console.log("error"+error);
            reject(false);
          }
        )

      }
    )
  }

  Logout(){
    this.user = null;
    this.isAuth = false;
    this.UserSubject = new Subject<User>();
  }
}
