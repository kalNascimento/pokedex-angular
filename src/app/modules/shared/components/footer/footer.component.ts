import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() bgColor!: string;
  textColor = '#242424';
  
  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    this.textChangeColor()
  }

  textChangeColor() {
    if (this.bgColor == '#f23838') {
      console.log('ok')
      this.textColor = '#fbfbfb';
    }
  }
}
