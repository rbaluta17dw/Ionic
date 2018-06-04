import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { homePage } from '../home/home';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {
	personaje:any[];
	nombre:string;
	descripcion:any;
	imagen:any;
	constructor(public navCtrl: NavController) {
		this.personaje=[
		{
			nombre:" ",
			descripcion:" ",
			imagen:" "
		}];
	}
	insert(){
		this.navCtrl.push(homePage, {
			personaje:this.personaje
		});
	}
}
