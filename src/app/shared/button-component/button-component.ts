import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button-component.css',
  templateUrl: './button-component.html',
})
export class ButtonComponent {
  title = input<string>('');
  onClick = output();
  isDisabled = input<boolean>(false);
  addButton = input<boolean>(false);
  deleted = input<boolean>(false);
}
