import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TStudentPage } from './t-student';

@NgModule({
  declarations: [
    TStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(TStudentPage),
  ],
  exports: [
    TStudentPage
  ]
})
export class TStudentPageModule {}
