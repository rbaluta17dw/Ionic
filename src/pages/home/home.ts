import { Component } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	personajes:any[];

	constructor(public navParams: NavParams, public modal: ModalController) {
		this.personajes=["Loki", "Gamora", "Iron-Man", "Thor"];
	}
		openModal(personaje){

			let infoPersonaje = this.modal.create('InfoPage', { 'personaje': personaje });
			
			infoPersonaje.present();
		}
}
