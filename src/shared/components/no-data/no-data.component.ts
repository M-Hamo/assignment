import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'pw-no-data',
  template: `<div
    class="h-100 w-full mt-20 text-center flex flex-col items-center justify-center text-white"
  >
    <div class="h-20 w-full flex flex-row items-center justify-center">
      <mat-icon class="h-full w-150  text-5xl">{{ icon }}</mat-icon>
    </div>
    <div class="mt-2 text-2xl font-semibold tracking-tight text-secondary">
      {{ text }}
    </div>

    <app-button
      class="pt-4"
      [text]="buttonText"
      icon="add"
      toolTip="Add new person"
      (clicked)="clicked.emit()"
    >
    </app-button>
  </div> `,
  styleUrls: ['no-data.component.scss'],
})
export class NoDataComponent {
  @HostBinding('class') public class = 'w-full h-full';

  @Input() public icon: string = '';
  @Input() public text: string = '';
  @Input() public buttonText: string = '';

  @Output() public clicked = new EventEmitter();
}
