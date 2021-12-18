import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class SubjectsService {
  public params = new BehaviorSubject<number | string>('');

  public totalLenth = new BehaviorSubject<number>(0);

  public lenth = new BehaviorSubject<number>(0);

  public params$ = this.params.asObservable();

  public totalLenth$ = this.totalLenth
    .asObservable()
    .pipe(tap((l) => (this.tLength = l)));

  public tLength: number = 0;

  public lenth$ = this.lenth.asObservable();
}
