import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  public currentIntroTextIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.updateIntroTextIndex();
    }, 5000);
  }

  updateIntroTextIndex() {
    this.currentIntroTextIndex = (this.currentIntroTextIndex + 1) % 4;
  }
}
