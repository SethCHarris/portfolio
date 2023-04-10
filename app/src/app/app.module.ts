import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
import { IntroComponent } from './intro/intro.component';
import { LanguagesComponent } from './languages/languages.component';
import { CertsComponent } from './certs/certs.component';
import { GithubComponent } from './github/github.component';
import { ThanksComponent } from './thanks/thanks.component';
import { SnakeComponent } from './snake/snake.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    IntroComponent,
    LanguagesComponent,
    CertsComponent,
    GithubComponent,
    ThanksComponent,
    SnakeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
