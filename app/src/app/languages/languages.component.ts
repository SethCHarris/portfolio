import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent {
  public selectedImage: number = 0;

  navigateLeftClicked() {
    if (this.selectedImage - 1 < 0) {
      this.selectedImage = 2;
    } else {
      this.selectedImage = this.selectedImage - 1;
    }
  }

  navigateRightClicked() {
    this.selectedImage = (this.selectedImage + 1) % 3;
    let imageId = 'image-' + (this.selectedImage - 1).toString();
  }
}
