import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispatcher-sign-in',
  templateUrl: './dispatcher-sign-in.component.html',
  styleUrls: ['./dispatcher-sign-in.component.css']
})
export class DispatcherSignInComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  signIn(){
    this.router.navigate(['sign-in/info']);
  }

}
