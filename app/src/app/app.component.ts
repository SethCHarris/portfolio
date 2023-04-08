import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public headerOptions: string[] = [
    'problem solver',
    'computer scientist',
    'tech enthusiast',
    'programmer',
  ];
  public currentHeaderIndex: number = 0;
  public currentHeaderOption: string =
    this.headerOptions[this.currentHeaderIndex];

  ngOnInit() {
    console.log(this.headerOptions[0]);
    this.updateHeaderOption();
    setInterval(() => {
      this.updateHeaderOption();
    }, 2500);
  }

  updateHeaderOption() {
    this.currentHeaderIndex = (this.currentHeaderIndex + 1) % 4;
    this.currentHeaderOption = this.headerOptions[this.currentHeaderIndex];
  }
}
