import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""

  constructor(private _login: LoginService) { }

  ngOnInit(): void {
  }

  login(event){
    event.preventDefault();
    let user = {
      "email":this.email,
      "password":this.password
    }
    this._login.login(user);
    console.log(this._login.estaLogueado());
  }
}
