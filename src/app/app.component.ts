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

  // signal and it's value type
  data: WritableSignal<number | string> = signal<number | string>(10);

  count: Signal<number> = computed(() => 100) // not change directlly

  updateSignal() {
    this.data.set("Hello World");
    // this.data.update((prev) => {prev + 1 }) update -> have limited onlu number here for it's work
  }


}
