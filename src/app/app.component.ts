import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // This all are meta data
  // template: `
  //   <div class="login-container">
  //     <h1>Login</h1>
  //     <form>
  //       <label for="username">Username:</label>
  //       <input type="text" id="username" name="username" required>

  //       <label for="password">Password:</label>
  //       <input type="password" id="password" name="password" required>

  //       <button type="submit">Login</button>
  //     </form>
  //   </div>
  // `,
  styleUrls: ['./app.component.css'],
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'AngularProject1';

  userName: string = '';

  // Additional component logic and methods can be added here

  onInputChange(event: Event): void {
    // Capture the input value
    this.userName = (event.target as HTMLInputElement).value;
  }


  ///////////////////////////////////////////////////////////
  isvalid: boolean = true;

// Specify the type of the 'valid' parameter as boolean
  changeValue(valid: boolean)
  {
  this.isvalid = valid;
  }  

  /////////////////////////////////////////////////////////////////
  constructor()
  {
    console.log("Component loaded......");
    
  }
  
  //////////////////////////////////////////////////////////////////////////
  //  get data //
  Cdata:any;
  getdata(val:any)
  {
    this.Cdata = val;
  }

////////////////////////////////////////////////////////////////////////////
// for loop //
// Assuming you have this array in your component

students: any[] = [
  {
    'name': 'achal verma',
    'age': 25,
    'gender': 'Male',
    'grade': 'A'
  },
  {
    'name': 'salil deogade',
    'age': 28,
    'gender': 'Male',
    'grade': 'B'
  },
  {
    'name': 'rohit xyz',
    'age': 22,
    'gender': 'Male',
    'grade': 'C'
  },
  {
    'name': 'abc verma',
    'age': 30,
    'gender': 'Female',
    'grade': 'A'
  },
  {
    'name': 'dddd verma',
    'age': 26,
    'gender': 'Female',
    'grade': 'B'
  },
  {
    'name': 'new student 1',
    'age': 21,
    'gender': 'Non-Binary',
    'grade': 'C'
  },
  {
    'name': 'new student 2',
    'age': 24,
    'gender': 'Male',
    'grade': 'A'
  },
 
];

minAge: number = 0;
nameSearch: string = '';

get filteredStudents(): any[] {
  return this.students.filter(student => student.age >= this.minAge &&
     student.name.toLowerCase().includes(this.nameSearch.toLowerCase()));
}
calculateAverageAge(): number {
  const totalAge = this.students.reduce((acc, student) => acc + student.age, 0);
  return this.students.length > 0 ? totalAge / this.students.length : 0;
}

  
}
