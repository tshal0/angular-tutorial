// Component is self contained and constituted by at least a piece of html code that is known as 
// template: class that encapsulated the data and interactions available to that template
// selector: tag used to select the component or use the aforementioned html in apps

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Star Wars People!';
}
