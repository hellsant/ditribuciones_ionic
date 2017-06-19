import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BetaPage } from './beta';

@NgModule({
  declarations: [
    BetaPage,
  ],
  imports: [
    IonicPageModule.forChild(BetaPage),
  ],
  exports: [
    BetaPage
  ]
})
export class BetaPageModule {}
