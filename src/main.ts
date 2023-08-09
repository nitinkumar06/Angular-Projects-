import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <p>
     Hello world this is nitin kumar , entire software low grade software engineer , hamari duniya mai bhut dukh hai , koi hame daru pila do  
    </p>
    
  <section>
  <div class="example-button-row">
    <button mat-stroked-button>Basic</button>
    <button mat-stroked-button color="primary">Primary</button>
    <button mat-stroked-button color="accent">Accent</button>
    <button mat-stroked-button color="warn">Warn</button>
    <button mat-stroked-button disabled>Disabled</button>
    <a mat-stroked-button href="https://www.google.com/" target="_blank">Link</a>
  </div>
</section>
  `,
})
export class App {
  name =
    'Nitin Chauhan & Mukesh kumar rai (software engineers of entire software)';
}

bootstrapApplication(App);
