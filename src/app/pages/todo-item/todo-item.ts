import { Component, input, output } from '@angular/core';
import { ButtonComponent } from '../../shared/button-component/button-component';

@Component({
  imports: [ButtonComponent],
  selector: 'app-todo-item',
  styleUrl: './todo-item.css',
  templateUrl: './todo-item.html',
})
export class TodoItem {
  readonly description = input<string>('');
  readonly onClick = output();
}
