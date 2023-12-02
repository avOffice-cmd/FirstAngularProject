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

  ///////////////////////////////////////////////////////////////////////

  students: any[];

  constructor() {
    this.students = [
      {
        studentsid: 1,
        name: 'achal',
        gender: 'male',
        age: 27,
        course: '.net'
      },
      {
        studentsid: 2,
        name: 'salil',
        gender: 'male',
        age: 30,
        course: 'Java'
      },
      {
        studentsid: 3,
        name: 'rohit',
        gender: 'male',
        age: 25,
        course: 'Python'
      }
     
    ];
  }
  getmorestudents():void
  {
    this.students = [
      {
        studentsid: 1,
        name: 'achal',
        gender: 'male',
        age: 27,
        course: '.net'
      },
      {
        studentsid: 2,
        name: 'salil',
        gender: 'male',
        age: 30,
        course: 'Java'
      },
      {
        studentsid: 3,
        name: 'rohit',
        gender: 'male',
        age: 25,
        course: 'Python'
      },
      {
        studentsid: 4,
        name: 'kkkk',
        gender: 'male',
        age: 27,
        course: 'sql'
      }
     
    ];
  }

  trackByStudentsid(index: number, student: any): string {
    return student.studentsid;
  }
  
}
