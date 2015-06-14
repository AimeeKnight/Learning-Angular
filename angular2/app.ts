/// < reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  // Defines the <my-app></my-app> tag
  selector: 'my-app'
})
@View({
  // Defines the inline template for the component
  template: '<h1>Hello {{ name }}</h1>'
})
// Component controller
class MyAppComponent {
  name: string;

  constructor() {
    this.name = 'Aimee';
  }
}
bootstrap(MyAppComponent);
