import { Component } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	personajes:any[];
	personajeE:any;
	nombre:string;
	descripcion:any;

	constructor(public navParams: NavParams, public modal: ModalController) {
		this.personajes=[
		{
			nombre:"Loki",
			descripcion:"Es un pavo que muere al principio"
		},
		{
			nombre:"Gamora",
			descripcion:"Es un pavo que muere al principio"
		},		
		{
			nombre:"Iron-Man",
			descripcion:"Es un pavo que muere al principio"
		},		
		{
			nombre:"Thor",
			descripcion:"Es un pavo que muere al principio"
		},		
		{
			nombre:"Vision",
			descripcion:"Es un pavo que muere al principio"
		}
	];
}
		openModal(personaje){

			let infoPersonaje = this.modal.create('InfoPage', { item:personaje });
			
			infoPersonaje.present();
		}
}
