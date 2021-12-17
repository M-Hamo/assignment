import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showedElements',
})
export class ElementsNumPipe implements PipeTransform {
  public transform(
    showedNum: number | null,
    fullLength: number | null
  ): string {
    return `${showedNum ?? '...'} Showing from
    ${fullLength ?? '...'}`;
  }
}
