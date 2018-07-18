import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { DicasPage } from '../dicas/dicas';

@IonicPage()
@Component({
	selector: 'page-register',
	templateUrl: 'register.html',
})
export class RegisterPage {

	@ViewChild('usuario') email;
	@ViewChild('senha') password;

	constructor(public navCtrl: NavController, public navParams: NavParams, public fire: AngularFireAuth, public toastCtrl: ToastController) {
	}

	registrar() {
		let toast = this.toastCtrl.create({ duration: 2000, position: 'bottom' });

		this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
			.then(data => {
				console.log(data);
				toast.setMessage('Usuário criado co sucesso');
				toast.present();
				this.navCtrl.setRoot(DicasPage);
			})
			.catch((error: any) => {
				switch (error.code) {
					case 'auth/email-already-in-use':
						toast.setMessage('Email digitado já está em uso');
						break;
					case 'auth/invalid-email':
						toast.setMessage('Email digitado não é válido');
						break;
					case 'auth/operation-not-allowed':
						toast.setMessage('Criação de usuários não está habilitada');
						break;
					case 'auth/weak-password':
						toast.setMessage('A senha digitada é muito fraca');
						break;
					default:
						break;
				}
				toast.present();
			});
	}

}
