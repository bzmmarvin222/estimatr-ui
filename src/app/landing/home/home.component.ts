import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'etmr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostBinding('class.root') true;

  constructor() { }

  ngOnInit() {
  }

}
