import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

distribuciones = [
    'Poisson',
    'T-Student',
    'Normal',
    'Beta',
    'Alfa'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
