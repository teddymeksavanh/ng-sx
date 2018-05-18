import { Component, OnInit } from '@angular/core';
import options from '../../../assets/particles.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public style = {
    'margin': 0,
    'padding': 0,
    'background': 'url(/assets/bg-header-star.jpg) no-repeat center fixed',
    '-webkit-background-size': 'cover',
    'background-size': 'cover',
    'position': 'absolute',
    'width': '100%',
    'height': '75%',
    'z-index': -1
  };

  public particlesOptions = options;

  constructor() { }

  ngOnInit() {}

}
