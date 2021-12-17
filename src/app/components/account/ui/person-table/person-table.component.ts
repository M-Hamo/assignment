import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
})
export class PersonTableComponent implements OnInit {
  public constructor() {}

  @Input() public elements: any;

  @Input() public searchingProcess: any = false;

  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  public ngOnInit(): void {}
}
