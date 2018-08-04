import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
	selector: 'page-recuperar',
	templateUrl: 'recuperar.html',
})
export class RecuperarPage {
	
	@ViewChild('email') emailDigitado;

	constructor(public navCtrl: NavController, public navParams: NavParams, public toastControler: ToastController, public fire: AngularFireAuth) {
	}

	recuperar(){
		let toast = this.toastControler.create({duration: 2000, position: 'bottom'});
		this.fire.auth.sendPasswordResetEmail(this.emailDigitado.value)
		.then(() => {
			toast.setMessage('Solicitação foi enviada para seu email');
			toast.present();
			this.navCtrl.pop();
		})
		.catch((error: any) => {
			switch (error.code) {
				case 'auth/invalid-email':
					toast.setMessage('Email digitado não é válido');
					break;
				case 'auth/user-not-found':
					toast.setMessage('Usuário não encontrado');
					break;
				default:
					break;
			}
			toast.present();
		});
	}
	
}
