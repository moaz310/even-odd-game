import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenComponents: number[] = [];
  oddComponents: number[] = [];
  onStart(event: number) {
    console.log(event);
    if(event % 2 === 0){
      this.evenComponents.push(event);
    }else{
      this.oddComponents.push(event);
    }
  }
}
