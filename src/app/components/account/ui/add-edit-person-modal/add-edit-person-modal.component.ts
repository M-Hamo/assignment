import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomValidationService, Validator } from 'src/shared/util/validator';
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
export class AddEditPersonModalComponent {
  public constructor(
    public dialogRef: MatDialogRef<AddEditPersonModalComponent>,
    private readonly _fb: FormBuilder
  ) {}
  public readonly form: FormGroup = this._innitForm();

  public get validForm(): boolean {
    return this.form?.valid;
  }

  public onClose(value?: Person): void {
    if (this.validForm) this.dialogRef.close(value);
    else {
      this.form.reset({});
      this.dialogRef.close();
    }
  }

  public get ageError(): string {
    const ageCtl: AbstractControl | null = this.form.get('age');
    return ageCtl?.hasError('range') && ageCtl?.touched
      ? 'Age should be grater than 18 & less than 65 *'
      : ageCtl?.hasError('required') && ageCtl?.touched
      ? 'Age is required*'
      : '';
  }

  private _innitForm(): FormGroup {
    return this._fb.group({
      name: [null, Validators.required],
      age: [
        null,
        [
          Validators.required,
          CustomValidationService.range(
            Validator.MIN_LENGTH,
            Validator.MAX_LENGTH
          ),
        ],
      ],
      gender: [null, Validators.required],
    });
  }
}
