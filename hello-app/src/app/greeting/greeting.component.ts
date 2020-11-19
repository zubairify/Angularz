import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  greeting = 'Hello and Welcome to My Angular App';
  
  constructor() { }

  ngOnInit() {
  }

}
