import { Component, signal } from '@angular/core';
import { ActionButtonComponent } from '../../shared/action-button-component/action-button-component';
import { InputComponent } from '../../shared/input-component/input-component';
import { FormsModule } from '@angular/forms';
interface ToDoListArr {
  id: number;
  description?: string;
}

const todoListArr: ToDoListArr[] = [
  {
    id: 1,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea assumenda, reiciendis, ullam cupiditate nemo blanditiis inventore minus facere odit minima, fugit consequatur perferendis odio',
  },
  {
    id: 2,
    description:
      'Lorem, ipsum dolor sit amet cupiditate nemo blanditiis inventore minus facere odit minima, fugit consequatur perferendis odio',
  },
  {
    id: 3,
    description:
      'Lorem molestiae ea assumenda, reiciendis, ullam cupiditate nemo blanditiis inventore minus facere odit minima, fugit consequatur perferendis odio',
  },
];
@Component({
  imports: [ActionButtonComponent, InputComponent, FormsModule],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList {
  readonly items = signal<ToDoListArr[]>(todoListArr);
  note = '';

  addNote() {
    const value = { id: Math.random() * 1000, description: this.note };
    this.items.update((todoListArr: ToDoListArr[]) => {
      return [...todoListArr, value];
    });
    this.note = '';
  }

  deleteNote(id: number) {
    const deletedItems = this.items().filter((item) => item.id !== id);
    this.items.set(deletedItems);
  }
}
