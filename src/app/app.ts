import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionButtonComponent } from './shared/action-button-component/action-button-component';
import { TodoList } from './pages/todo-list/todo-list';

@Component({
  imports: [RouterOutlet, TodoList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('dz1');
  onClick() {
    console.log('Click');
  }
}
