import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-action-button',
  styleUrl: './action-button-component.css',
  templateUrl: './action-button-component.html',
})
export class ActionButtonComponent {
  @Input() name = 'Кнопка';
  @Input() width = '180px';
  @Input() color = '#7758b5';
  @Input() background = '#bd9ff833';
  @Input() hoverColor = '#7758b5';
  @Input() border = '';
  @Output() onClick = new EventEmitter<void>();
}
