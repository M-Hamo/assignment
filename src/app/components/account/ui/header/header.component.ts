import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly _unsubscribeAll = new Subject<boolean>();

  public readonly _searchInput: FormControl = new FormControl('');

  @Input() public showSearch: boolean = true;

  @Input() public title: string = '';

  @Input() public searchPlaceholder: string = '';

  @Output() public onSearch = new EventEmitter<string | number>();

  public ngOnInit(): void {
    this._searchInput.valueChanges
      .pipe(
        debounceTime(100),
        tap((value) => {
          this.onSearch.emit(value);
        }),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }
}
