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

	constructor(public navCtrl: NavController, 
				public navParams: NavParams, 
				public fire: AngularFireAuth, 
				public toatsCtrl: ToastController) {
					
	}

	logout(){

		let toast = this.toatsCtrl.create({duration: 3000, position: 'bottom'});

		this.fire.auth.signOut();
		toast.setMessage('Deslogado com sucesso!');
		toast.present();

		this.navCtrl.setRoot(HomePage);
	}
}
