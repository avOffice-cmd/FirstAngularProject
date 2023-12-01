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
  
  //  get data //
  Cdata:any;
  getdata(val:any)
  {
    this.Cdata = val;
  }
  constructor()
  {
    console.log("Component loaded......");
    
  }
}
