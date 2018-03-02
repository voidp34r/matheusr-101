import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user: boolean;
  constructor() { this.user = false; }

  ngOnInit() {
    setTimeout(time => {
      this.user = true;
    }, 3000);
  }

}
