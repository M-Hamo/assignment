import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Person } from '../../util/person.model';

@Component({
  selector: 'app-add-edit-person-modal',
  templateUrl: './add-edit-person-modal.component.html',
  styles: [
    `
      .mat-dialog-container {
        padding: 0px !important;
      }
    `,
  ],
})
export class AddEditPersonModalComponent implements OnInit {
  public constructor(
    public dialogRef: MatDialogRef<AddEditPersonModalComponent>,
    private readonly _fb: FormBuilder
  ) {}
  public readonly form: FormGroup = this._innitForm();

  ngOnInit(): void {}

  private _innitForm(): FormGroup {
    return this._fb.group({
      name: [''],
      age: [''],
      gender: [''],
    });
  }

  public onClick(value?: Person | null): void {
    this.dialogRef.close(value);
  }
}
