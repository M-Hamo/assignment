import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button
    class="flex justify-center items-center h-10 min-w-max cursor-pointer rounded-full py-1 px-7 font-medium
    text-lg"
    [disabled]="disabled"
    (click)="clicked.emit()"
    [ngClass]="inputClass"
    [matTooltip]="toolTip"
    [type]="type"
  >
    <mat-icon *ngIf="icon">{{ icon }}</mat-icon>
    {{ text }}
  </button>`,
})
export class ButtonComponent {
  @Input() public inputClass: string = '';

  @Input() public text: string = '';

  @Input() public icon: string = '';

  @Input() public toolTip: string = '';

  @Input() public type: string = 'button';

  @Input() public disabled: boolean = false;

  @Output() public clicked = new EventEmitter();
}
