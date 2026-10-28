import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-action-button',
  styleUrl: './action-button-component.css',
  templateUrl: './action-button-component.html',
})
export class ActionButtonComponent {
  name = input('Кнопка');
  width = input('180px');
  color = input('#7758b5');
  background = input('#bd9ff833');
  hoverColor = input('#7758b5');
  border = input('');
  onClick = output<void>();
}
