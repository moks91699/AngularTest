import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean = true;

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private loginservice: LoginService, private router: Router) {}

  ngOnInit(): void {
  }


  loginSubmit() {
    var userInfo = this.loginForm.value;
    this.loginservice.login(userInfo.userName, userInfo.password).then(
      res => {
        if (res.loginSuccessful) {
          this.isLoggedIn = true;
          alert('Login Successful')
          this.router.navigate(['/home'])
        }
        
        },
        (err) => {
          this.isLoggedIn = false;
        }
      
    
    )


  }

  }




