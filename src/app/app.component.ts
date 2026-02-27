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

  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y());

  btnClick() {
    console.log(this.z());
    this.x.set(100);
    console.log(this.z());
  }
}
