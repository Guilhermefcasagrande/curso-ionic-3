import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DicasPage } from '../dicas/dicas';
import { RegisterPage } from '../register/register';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('usuario') email;
	@ViewChild('senha') password;

	constructor(public navCtrl: NavController, public toatsCtrl: ToastController) {

	}

	entrar(){

		let toast = this.toatsCtrl.create({duration: 3000, position: 'bottom'});

		if(this.email.value == 'guilherme' && this.password.value == 'asd'){
			this.navCtrl.push(DicasPage);
			toast.setMessage('Logado com sucesso');
			toast.present();
		}else{
			toast.setMessage('Usuário ou senha incorretos');
			toast.present();
		}
	}

	cadastrar(){
		this.navCtrl.push(RegisterPage);
	}
}
