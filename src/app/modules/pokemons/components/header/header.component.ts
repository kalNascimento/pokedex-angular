import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    const test = 0;
    console.log(test)
  }

}
