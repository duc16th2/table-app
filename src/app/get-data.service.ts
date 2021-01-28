import { Injectable } from '@angular/core';
import * as data from './users.json';
@Injectable({
  providedIn: 'root',
})
export default class GetDataService {
  products: any = (data as any).default;
  constructor() {}
  getDataUser() {
    return this.products;
  }
}
