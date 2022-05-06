import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shared:SharedService,private router:Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  profile(){
    if (localStorage.getItem('currentUser[type]')) 
      this.router.navigate(['driver-dashboard']);
    else 
      this.router.navigate(['applicant-dashboard']);
  }

  logout(){
    this.auth.signout();
    this.router.navigate(['/']);
  }

}
