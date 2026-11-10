import { Component, DestroyRef, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TodoItem } from '../todo-item/todo-item';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';
import { ButtonComponent } from '../../shared/button-component/button-component';
interface TodoListItem {
  id: number;
  description?: string;
}

const todoListItem: TodoListItem[] = [
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
  imports: [MatFormFieldModule, MatInputModule, FormsModule, TodoItem, MatProgressSpinnerModule, ButtonComponent],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList implements OnInit {
  private destroyRef = inject(DestroyRef);
  readonly items = signal<TodoListItem[]>(todoListItem);
  readonly isLoading = signal<boolean>(false);
  note = '';

  ngOnInit(): void {
    this.isLoading.set(true);

    timer(2000) // в задании было пол секнды, добавил больше для наглядности
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.isLoading.set(false));
  }

  addNote() {
    if (this.note.length === 0) return;
    const maxId = this.items().reduce((max, item) => Math.max(max, item.id), 0);
    console.log(maxId);
    const value = { id: maxId + 1, description: this.note };
    this.items.update((todoListItem: TodoListItem[]) => {
      return [...todoListItem, value];
    });
    this.note = '';
  }

  deleteNote(id: number) {
    if (!id) return;
    const deletedItems = this.items().filter((item) => item.id !== id);
    this.items.set(deletedItems);
  }
}
