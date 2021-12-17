import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ModalSize } from 'src/shared/util/modal-sizes.model';
import { PersonService } from '../../data-access/person.service';
import { AddEditPersonModalComponent } from '../../ui/add-edit-person-modal/add-edit-person-modal.component';
import { concatMap, filter, takeUntil, tap } from 'rxjs/operators';
import { Person } from '../../util/person.model';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit, OnDestroy {
  public constructor(
    private personService: PersonService,
    public dialog: MatDialog
  ) {}
  private _unsubscribeAll = new Subject<boolean>();

  public filteredPersons$ = this.personService.filteredPersons$;

  public shownPersonsLength$ = this.personService.lenth$;

  public personsTotalLength$ = this.personService.totalLenth$;

  public ngOnInit(): void {}

  public onSearch(search: number | string): void {
    this.personService.params.next(search);
  }

  public onAddPerson(): void {
    const dialogRef = this.dialog.open(AddEditPersonModalComponent, {
      width: ModalSize.WIDTH,
      height: ModalSize.HIGHT,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((value) => !!value),
        tap((result: Person) => {
          this.personService.addPerson(result);
        }),
        concatMap((_) => this.personService.getAllPersons$),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }
}
