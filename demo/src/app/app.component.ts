import { Component } from '@angular/core';
import { BlockUI } from 'ng-block-ui';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @BlockUI() blockUI;
  @BlockUI('block-element') blockUIList;


  constructor(
  ) { }

  blockMain() {
    this.blockUI.start();

    setTimeout((blockUI) => {
      this.blockUI.stop();
    }, 2000);
  }

  blockElement() {
    this.blockUIList.start('Loading...');

    setTimeout((blockUI) => {
      this.blockUIList.stop();
    }, 2000);
  }
}
