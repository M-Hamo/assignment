import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button
    [matTooltip]="toolTip"
    class="flex justify-center items-center h-10 min-w-max cursor-pointer rounded-full py-1 px-7 font-medium
  text-lg {{ type === 'action' ? typeAction : button }}"
    (click)="clicked.emit()"
  >
    <mat-icon *ngIf="icon">{{ icon }}</mat-icon>
    {{ text }}
  </button>`,
})
export class ButtonComponent {
  @Input() public text: string = '';
  @Input() public icon: string = '';
  @Input() public toolTip: string = '';
  @Input() public type: string = '';

  public readonly typeAction: string = `
  bg-gray-800
  text-white
  hover:bg-gray-500
  `;

  public readonly button: string = `
  border
  border-gray-500
  text-gray-800
  hover:bg-gray-500
  hover:text-white
  `;

  @Output() public clicked = new EventEmitter();
}
