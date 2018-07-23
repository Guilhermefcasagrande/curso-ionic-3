import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DicasPage } from '../dicas/dicas';
import { RegisterPage } from '../register/register';

import { AngularFireAuth } from 'angularfire2/auth';

import { Users } from './users';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	users: Users = new Users();

	@ViewChild('usuario') email;
	@ViewChild('senha') password;

	constructor(public navCtrl: NavController, public toatsCtrl: ToastController, public fire: AngularFireAuth) {

	}

	entrar(){

		let toast = this.toatsCtrl.create({duration: 3000, position: 'bottom'});

		this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
			.then(data =>{
				this.users.email = this.email.value;
				this.users.senha = this.password.value;

				this.navCtrl.setRoot(DicasPage);
			})
			.catch((error: any) => {
				switch (error.code) {
					case 'auth/invalid-email':
						toast.setMessage('Email inválido');
						break;
					case 'auth/user-disabled':
						toast.setMessage('Usuário desabilitado');
						break;
					case 'auth/user-not-found':
						toast.setMessage('Usuário não encontrado');
						break;
					case 'auth/wrong-password':
						toast.setMessage('Senha incorreta');
						break;
					default:
						break;
				}
				toast.present();
			});
	}

	cadastrar(){
		this.navCtrl.push(RegisterPage);
	}
}
