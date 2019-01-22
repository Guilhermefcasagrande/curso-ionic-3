import { ProfilePage } from './../pages/profile/profile';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DicasPage } from '../pages/dicas/dicas';
import { RegisterPage } from '../pages/register/register';
import { RecuperarPage } from '../pages/recuperar/recuperar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { WordpressService } from './../services/wordpress.service';
import { Http, HttpModule } from '@angular/http';
import { PostPage } from './../pages/post/post';




//inserir apiKey
var firebaseConfig = {
  apiKey: "AIzaSyDePzFL9G45EKEcC8xqY01ppxEDhWoM_PQ",
  authDomain: "nutri-7978e.firebaseapp.com",
  databaseURL: "https://nutri-7978e.firebaseio.com",
  projectId: "nutri-7978e",
  storageBucket: "nutri-7978e.appspot.com",
  messagingSenderId: "244369070099"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DicasPage,
    RegisterPage,
    RecuperarPage,
    ProfilePage,
    PostPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DicasPage,
    RegisterPage,
    RecuperarPage,
    ProfilePage,
    PostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WordpressService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
