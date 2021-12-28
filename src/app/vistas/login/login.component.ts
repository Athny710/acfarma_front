import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, Form } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { LoginI } from "../../modelos/login.interface"
import { ResponseI } from "../../modelos/response.interface"
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user:new FormControl('', Validators.required),
    pass:new FormControl('', Validators.required)
  })

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async onLogin(form: LoginI){

    /*
    console.log(form.pass);
    const salt = bcrypt.genSalt(12);
    let pass = bcrypt.hashSync(form.pass, 10);
    console.log(pass);
    form.pass = pass;
    */console.log(form)
    this.auth.loginByEmail(form).subscribe(data => {
      let dataResponse:ResponseI = data;
      console.log(dataResponse.token);
      if(dataResponse.estado == "ok"){
        localStorage.setItem("token", dataResponse.token);
        this.router.navigate(['inicio/usuarios'])
      } 
    });
  }

}
