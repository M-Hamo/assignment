import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SubjectsService {
  public params = new BehaviorSubject<number | string>('');

  public totalLenth = new BehaviorSubject<number>(0);

  public lenth = new BehaviorSubject<number>(0);
}
