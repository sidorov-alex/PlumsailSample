import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: number): any {
    switch (value) {
      case 0:
        return 'Female';
      case 1:
        return 'Male';
      default:
        return 'Unknown';
    }
  }

}
