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
	imagen:any;

	constructor(public navParams: NavParams, public modal: ModalController) {
		this.personajes=[
		{
			nombre:"Loki",
			descripcion:"Es un pavo que muere al principio",
			imagen:"https://vignette.wikia.nocookie.net/shipping/images/b/b7/Avengers_-_Loki_%28uniqueLegend%29.jpg/revision/latest?cb=20130910075950"
		},
		{
			nombre:"Gamora",
			descripcion:"Es un pavo que muere al principio",
			imagen:"http://versatileleather.com/wp-content/uploads/2014/11/guardians-of-the-galaxy-gamora-costume-2.jpg"
		},		
		{
			nombre:"Iron-Man",
			descripcion:"Es un pavo que muere al principio",
			imagen:"https://wallpapersite.com/images/wallpapers/iron-man-3840x2160-avengers-infinity-war-4k-12794.jpg"
		},		
		{
			nombre:"Thor",
			descripcion:"Es un pavo que muere al principio",
			imagen:"https://www.sideshowtoy.com/wp-content/uploads/2018/03/marvel-avengers-infinity-war-thor-sixth-scale-figure-hot-toys-feature-903422.jpg"
		},		
		{
			nombre:"Vision",
			descripcion:"Es un pavo que muere al principio",
			imagen:"http://www.comingsoon.net/assets/uploads/2017/03/Avengers-Age-of-Ultron_poster_goldposter_com_151-1.jpg"
		}
	];
}
		openModal(personaje){

			let infoPersonaje = this.modal.create('InfoPage', { item:personaje });
			
			infoPersonaje.present();
		}
}
