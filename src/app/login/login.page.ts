import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import {LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
onSubmit(_t7: NgForm) {
throw new Error('Method not implemented.');
}
  isLoading = false;
  isLogin = false;
  


 constructor(
   private loginService: LoginService,
   private router: Router,
   private loadingCtrl: LoadingController,
 ) { }

 ngOnInit() {}
 onLogin (){
   this.isLoading = true;
   this.loginService.login();
   this.loadingCtrl
   .create({ keyboardClose: true, message:'You are being logged in...' })
   .then(loadingEl => {
     loadingEl.present();
     setTimeout(() => {
       this.isLoading = false;
       loadingEl.dismiss();
       this.router.navigateByUrl('/page1');
     }, 1500);
    });
 }
}