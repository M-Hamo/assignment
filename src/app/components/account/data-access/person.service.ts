import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, throwError } from 'rxjs';

import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { ModalService } from 'src/shared/modals/modal.service';
import { Person } from '../util/person.model';
import { SubjectsService } from './subjects.service';

@Injectable({
  providedIn: 'root',
})
export class PersonService extends SubjectsService {
  public constructor(
    private readonly _http: HttpClient,
    private modalService: ModalService
  ) {
    super();
  }
  private readonly api_url = 'http://smanager.sharewinds.tk/api/Subs';

  public getAllPersons$ = this._http
    .get<Person[]>(`${this.api_url}/GetAllPersons`)
    .pipe(
      tap((persons: Person[]) => this.totalLenth.next(persons?.length)),
      // catchError(this._handleError)
    );

  filteredPersons$ = combineLatest([this.params$, this.getAllPersons$]).pipe(
    map(([param, persons]) => this._filterPersons(persons, param)),
    tap((persons: Person[]) => {
      this.lenth.next(persons?.length);
    }),
    shareReplay(1)
  );

  /**
   *
   * @param person from type Person
   * @returns Person
   */
  public addPerson(person: Person): Observable<Person> {
    person.id = this.tLength + 1;
    return this._http.post<Person>(`${this.api_url}/addNewPerson`, person).pipe(
      tap((_) => {
        this.modalService.open('New person added successfully');
      }),
      catchError(this._handleError)
    );
  }

  private _filterPersons(persons: Person[], param: string | number): Person[] {
    return persons.filter((person: Person) => {
      const p = param.toString().trim().toLowerCase();
      return (
        person?.name.toLowerCase().includes(p) ||
        person?.age.toString().toLowerCase().includes(p) ||
        person?.gender.toLowerCase().includes(p)
      );
    });
  }

  private _handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err?.error?.message}`;
    } else {
      errorMessage = `Backend returned code ${err?.status}: ${err?.body?.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
