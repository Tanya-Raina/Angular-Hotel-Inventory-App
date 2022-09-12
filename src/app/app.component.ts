import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root', // in angular.json, the prefix is declared as "hinv", so the selector is "hinv-root"
  // angular specifies that all html tags must start with this prefix
  // also change in index.html

  templateUrl: './app.component.html',
  // template: `<h1>Hello world</h1>
  // <p>My first paragraph</p>`,

  // for single line, we can use single quotes
  // to have multiple lines, we can use backticks
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'admin';
}


// when we create a new component, we create a view
// this is rendered using a custom html tag
// <app-root></app-root>
// we will be creating multiple reusable html tags

