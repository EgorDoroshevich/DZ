import { Component, input, output } from '@angular/core';
import { ButtonComponent } from '../../shared/button-component/button-component';

@Component({
  imports: [ButtonComponent],
  selector: 'app-todo-item',
  styleUrl: './todo-item.css',
  templateUrl: './todo-item.html',
})
export class TodoItem {
  readonly text = input<string>('');
  readonly description = input<string>('');
  readonly id = input<number>(0);
  readonly selectedItemId = input<number | null>(null);

  readonly buttonClick = output<number>();
  readonly selectItem = output<number | null>();
}
