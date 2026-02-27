import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19';

  count = signal(10);

  constructor() {
    // effect => A reactive function that runs automatically whenever the signals it reads change.
    effect(() => {
      console.log('count is ', this.count());
    });
  }

  incr() {
    // this.count.set(100);
    this.count.update(c => c + 1);
  }

  decr() {
    this.count.update(c => c - 1);
  }
}
