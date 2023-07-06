import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() startEvent = new EventEmitter<number>();
  currentNumber = 0;
  interv!: any;
  onStart(){
    this.interv = setInterval(()=>{
      this.startEvent.emit(this.currentNumber++);
    }, 1000)
  }
  
  
  onStop() {
    clearInterval(this.interv);
  }
}
