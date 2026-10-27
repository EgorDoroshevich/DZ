import { Component } from '@angular/core';
import { ActionButtonComponent } from '../../shared/action-button-component/action-button-component';
import { InputComponent } from '../../shared/input-component/input-component';
const todotistArr = [
  {
    id: 1,
    descriprion:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea assumenda, reiciendis, ullam cupiditate nemo blanditiis inventore minus facere odit minima, fugit consequatur perferendis odio',
  },
  {
    id: 2,
    descriprion:
      'Lorem, ipsum dolor sit amet cupiditate nemo blanditiis inventore minus facere odit minima, fugit consequatur perferendis odio',
  },
  {
    id: 3,
    descriprion:
      'Lorem molestiae ea assumenda, reiciendis, ullam cupiditate nemo blanditiis inventore minus facere odit minima, fugit consequatur perferendis odio',
  },
];
@Component({
  imports: [ActionButtonComponent, InputComponent],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList {
  readonly items = todotistArr;
}
