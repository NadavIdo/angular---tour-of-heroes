import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                    //htmlנמצא בדף ה- יh
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';

  onSave() {
    console.log('onSave works!')
  };

  onToggle() {
    // if(this.title) {
    //   this.title='';
    // } else {
    //   this.title = 'Tour of Heroes';
    // }
    this.title = this.title ? '' : 'Tour of Heroes';   //אותו דבר כמו למעלה בתנאי מקוצר
  }
}
