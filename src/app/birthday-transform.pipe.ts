import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthdayTransform',
})
export class BirthdayTransformPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    let str1 = value.split('T');
    let str2 = str1[0].split('-');
    let newArr = [];
    for (let i = str2.length - 1; i >= 0; i--) {
      newArr.push(str2[i]);
    }
    let result = newArr.join('/');
    return result;
  }
}
