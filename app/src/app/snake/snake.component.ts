import { Component } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss'],
})
export class SnakeComponent {
  public gameStarted: boolean = false;
  public currentSnakeDirection: string = 'UP';
  public boardHeight: number[] = [];

  ngOnInit() {
    this.boardHeight = [...Array(10).keys()];
    document.onkeydown = (e) => {
      switch (e.key) {
        case 'a':
          this.directionKeyPressed('LEFT');
          break;
        case 'w':
          this.directionKeyPressed('UP');
          break;
        case 's':
          this.directionKeyPressed('DOWN');
          break;
        case 'd':
          this.directionKeyPressed('RIGHT');
          break;
      }
    };
  }

  directionKeyPressed(direction: string) {
    if (this.gameStarted) {
      this.currentSnakeDirection = direction;
      console.log(this.currentSnakeDirection);
    }
  }

  startGame() {
    this.gameStarted = true;
  }
}
