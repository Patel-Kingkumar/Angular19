import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19';

  userName = signal('King');

  constructor() {
    effect(() => {
      console.log('User name is: ', this.userName());
    });
  }

  btnClick() {
    this.userName.set('Kano');
  }

}
