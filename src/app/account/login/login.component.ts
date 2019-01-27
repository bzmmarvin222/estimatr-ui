import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'etmr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @HostBinding('class.root') true;

  constructor() { }

  ngOnInit() {
  }

}
