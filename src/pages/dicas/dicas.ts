import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { PostPage } from './../post/post';

import { WordpressService } from './../../services/wordpress.service';


@IonicPage()
@Component({
	selector: 'page-dicas',
	templateUrl: 'dicas.html',
})
export class DicasPage {

	posts: Array<any> = new Array <any>();
	morePagesAvailable: boolean = true;

	constructor(public navCtrl: NavController, 
				public navParams: NavParams, 
				public fire: AngularFireAuth, 
				public toatsCtrl: ToastController,
				public loadingCtrl: LoadingController,
				public wordpressService: WordpressService) {
					
	}

	// Função do próprio ionic
	ionViewWillEnter(){
		this.morePagesAvailable = true;

		if(!(this.posts.length > 0)){
			let loading = this.loadingCtrl.create();
			loading.present();

			this.wordpressService.getRecentPosts()
			.subscribe(data => {
				console.log('dados das postagens: ', data);
				for(let post of data){
					// Remove as tags html que vem no conteúdo
					post.excerpt.rendered = post.excerpt.rendered.split('<a')[0] + '<p>';

					this.posts.push(post);
				}

				loading.dismiss();
			});
		}
	}

	logout(){

		let toast = this.toatsCtrl.create({duration: 3000, position: 'bottom'});

		this.fire.auth.signOut();
		toast.setMessage('Deslogado com sucesso!');
		toast.present();

		this.navCtrl.setRoot(HomePage);
	}

	postTapped(event, post){
		this.navCtrl.push(PostPage, {
			item:post
		});
	}
}
