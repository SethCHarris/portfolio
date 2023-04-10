import { Component } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss'],
})
export class ThanksComponent {
  public totalVisitors: number = 0;
  public totalVisitorsWithSuffix: string = '';

  ngOnInit() {
    this.totalVisitors = Math.floor(Math.random() * 10);
    this.totalVisitorsWithSuffix = this.getSuffixOfNumber(this.totalVisitors);
  }

  getSuffixOfNumber(num: number) {
    var j = num % 10,
      k = num % 100;
    if (j == 1 && k != 11) {
      return num + 'st';
    }
    if (j == 2 && k != 12) {
      return num + 'nd';
    }
    if (j == 3 && k != 13) {
      return num + 'rd';
    }
    return num + 'th';
  }
}
