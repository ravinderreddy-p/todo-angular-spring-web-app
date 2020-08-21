import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'Ravi'
  password = ''
  errorMessage = 'invalid credentials'
  invalidLogin = false
  
  //Dependency Ingestion
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }
  handleLogin(){
    // if(this.username === 'Ravi' && this.password === 'dummy') {
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to Welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }
  }

}
