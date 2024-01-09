import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
  user!: User
  ngOnInit(): void {
    // this.getCurrentUser();
  }
  logOut() {
    localStorage.clear();
  }
  getCurrentUser() {
    this.user = JSON.parse(sessionStorage.getItem("US_") || '');
  }
}
