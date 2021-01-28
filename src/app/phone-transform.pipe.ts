import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneTransform',
})
export class PhoneTransformPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    let arr = value.split('-');
    let str = arr.join('');
    return '(+84)' + str;
  }
}
