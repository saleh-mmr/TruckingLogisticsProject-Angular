import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shared:SharedService,private router:Router) { }

  ngOnInit(): void {
  }

  profile(){
    if (this.shared.getType()) 
      this.router.navigate(['user-dashboard']);
    else 
      this.router.navigate(['dispatcher-dashboard']);
  }

  logout(){
    this.shared.setIsLogin(false);
    this.router.navigate(['/']);
  }

}
