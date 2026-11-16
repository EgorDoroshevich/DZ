import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TodoItem } from '../todo-item/todo-item';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';
import { ButtonComponent } from '../../shared/button-component/button-component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { TooltipDirective } from '../../shared/directive/tooltip';
interface TodoListItem {
  id: number;
  text: string;
  description: string;
}

const todoListItem: TodoListItem[] = [
  {
    id: 1,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea assumenda, reiciendis, ullam cupiditate nemo blanditiis inventore minus facere odit minima, fugit consequatur perferendis odio',
    description: 'sit amet consectetur adipisicing elit',
  },
  {
    id: 2,
    text: 'Lorem, ipsum dolor sit amet cupiditate nemo blanditiis inventore minus facere odit minima, fugit consequatur perferendis odio',
    description: 'sit amet djshdvjn sdvn sdk adipisicing elit',
  },
  {
    id: 3,
    text: 'Lorem molestiae ea assumenda, reiciendis, ullam cupiditate nemo blanditiis inventore minus facere odit minima, fugit consequatur perferendis odio',
    description: 'sit amet djshdvjn sdvn sdk ef kjef  adipisicing elit',
  },
];
@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    TodoItem,
    MatProgressSpinnerModule,
    ButtonComponent,
    MatSelectModule,
    TextFieldModule,
    TooltipDirective,
  ],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList implements OnInit {
  private destroyRef = inject(DestroyRef);
  readonly items = signal<TodoListItem[]>(todoListItem);

  readonly selectedItemId = signal<number | null>(null);
  readonly isLoading = signal<boolean>(false);
  note = '';
  description = '';

  ngOnInit(): void {
    this.isLoading.set(true);

    timer(2000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.isLoading.set(false));
  }

  addNote() {
    if (this.note.length === 0) return;
    const maxId = this.items().reduce((max, item) => Math.max(max, item.id), 0);
    const value = { id: maxId + 1, text: this.note, description: this.description };
    this.items.update((todoListItem: TodoListItem[]) => {
      return [...todoListItem, value];
    });
    this.note = '';
    this.description = '';
  }

  deleteNote(id: number) {
    if (!id) return;
    const deletedItems = this.items().filter((item) => item.id !== id);
    this.items.set(deletedItems);
  }

  selectItem(id: number | null) {
    this.selectedItemId.set(id);
  }
}
