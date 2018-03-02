import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy  {
  mobileQuery: MediaQueryList;
  fillerNav = Array(5).fill(0).map((_, i) => `Nav Item ${i + 1}`);
  fillerContent = Array(5).fill(0).map(() =>
      `Lorem ipsum dolor `);
  private _mobileQueryListener: () => void;

  title = 'app';
  data;
  user;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    console.log('The component is initialized');
    // this.getdata();
    this.user = ({ nome: 'matheus'});
  }
  // getdata() {
  //   setTimeout( time => {
  //     console.log('time');
  //     this.user = ({ nome: 'matheus'});
  //   }, 3000);
  // }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
