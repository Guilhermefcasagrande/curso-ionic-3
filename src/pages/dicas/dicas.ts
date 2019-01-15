import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
	selector: 'page-dicas',
	templateUrl: 'dicas.html',
})
export class DicasPage {

	email: String;
	fotoPerfil: boolean = false;
	facebook = {
		nome: '',
		fotoUrl: ''
	}

	constructor(public navCtrl: NavController, 
				public navParams: NavParams, 
				public fire: AngularFireAuth, 
				public toatsCtrl: ToastController) {
		
		this.email = fire.auth.currentUser.email;

		this.facebook.nome = fire.auth.currentUser.displayName;
		this.facebook.fotoUrl = fire.auth.currentUser.photoURL;

		if(this.facebook.fotoUrl == null){
			this.fotoPerfil = false;
		} else{
			this.fotoPerfil = true;
		}
					
	}

	logout(){

		let toast = this.toatsCtrl.create({duration: 3000, position: 'bottom'});

		this.fire.auth.signOut();
		toast.setMessage('Deslogado com sucesso!');
		toast.present();

		this.navCtrl.setRoot(HomePage);
	}
}
