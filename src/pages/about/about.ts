import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { homePage } from '../home/home';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {

/* Creo el array de personajes y los atributos, en este caso, nombre, descripcion e imagen */
	personaje:any[];
	nombre:string;
	descripcion:any;
	imagen:any;
	constructor(public navCtrl: NavController) {
/* Inicializo el array pero esta vez vacio para rellenarlo el usuario */
		this.personaje=[
		{
			nombre:" ",
			descripcion:" ",
			imagen:" "
		}];
	}
    
/* Este es el metodo que envia el personaje que nosotros hemos creado a la pagina de listar */
	insert(){
		this.navCtrl.push(homePage, {
			personaje:this.personaje();
		});
	}
}
