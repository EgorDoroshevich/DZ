import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-action-button',
  styleUrl: './action-button-component.css',
  templateUrl: './action-button-component.html',
})
export class ActionButtonComponent {
  name = input<string>('Кнопка');
  width = input<string>('180px');
  color = input<string>('#7758b5');
  background = input<string>('#bd9ff833');
  hoverColor = input<string>('#7758b5');
  border = input<string>('');
  onClick = output<void>();
  isDisabled = input<boolean>(false);
}
