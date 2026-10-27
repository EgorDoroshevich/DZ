import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-input-component',
  styleUrl: './input-component.css',
  templateUrl: './input-component.html',
})
export class InputComponent {
  @Input() width = '200px';
  @Input() height = '';
  @Input() placeholder = 'Введите текст';
  @Input() border = '';
}
