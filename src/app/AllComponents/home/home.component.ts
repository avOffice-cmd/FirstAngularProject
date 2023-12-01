import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  // using metadata passing the value from parent to child
  // inputs:['Pdata', 'Pdata2'],

  // out the event from child to parent
  outputs:['childevent'],


  preserveWhitespaces : true,
  // encapsulation:ViewEncapsulation.None
})
export class HomeComponent  {
  // any means it can hold any type of data
  // Pdata:any;
  // Pdata2:any;

  // using eventEmitter generate custom evenet
  childevent = new EventEmitter();

  name = "Salil"

  // function
  onchange(val:any){
    // console.log(val);
    this.childevent.emit(val);
    
  }
}
