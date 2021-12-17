import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

export type SnackBarVariant = 'normal' | 'success' | 'error';

function _panelClass(variant: SnackBarVariant): string[] | undefined {
  return variant === 'success'
    ? ['snack-success']
    : variant === 'error'
    ? ['snack-error']
    : undefined;
}

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(private readonly _snackBar: MatSnackBar) {}

  open(message: string, variant?: any, duration = 1000): void {
    this._snackBar.open(message, 'Close', {
      direction: 'ltr',
      duration,
      panelClass: _panelClass(variant),
    });
  }
}
