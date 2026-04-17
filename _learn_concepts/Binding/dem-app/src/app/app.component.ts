import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dem-app';
  counter = 0;
  inputText = "Default value";

  incrementCounter(){
    this.counter++;
  }

  decrementCounter(){
    if(this.counter <= 0){
      alert("you have reach the limit")
      this.counter = 0;
    }
    this.counter--;
  }


  // ngClass
  msg: string = 'This is a dangerous msg';
  classes: string = 'danger text-size';



  // ngStyle
  selectedColor: string = 'red';
}
