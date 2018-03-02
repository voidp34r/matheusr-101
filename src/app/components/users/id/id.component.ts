import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {
  param;
  constructor( router: Router) {
    this.param = router.url.toString();
   }

  ngOnInit() {
  }

}
