import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
})
export class PersonTableComponent {
  public constructor() {}

  @Input() public elements: any;

  @Input() public searchingProcess: any = false;

  public displayedColumns: string[] = ['id', 'name', 'age', 'gender'];
}
