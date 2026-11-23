import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-input-component',
  styleUrl: './input-component.css',
  templateUrl: './input-component.html',
})
export class InputComponent {
  width = input('200px');
  height = input('');
  placeholder = input('Введите текст');
  border = input('');
}
