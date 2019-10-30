import {Injectable} from '@angular/core';
import {Dictionary} from './interface/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Dictionary[] = [
    {key: 'hello', value: 'xin chào'},
    {key: 'product', value: 'sản phẩm'},
    {key: 'component', value: 'thành phần'}
  ];

  search(key: string): string {
    if (!key) {
      return '';
    }
    const w = this.dictionary.find(item => item.key === key.toLowerCase());
    if (w) {
      return w.value;
    }
    return 'Not found';
  }

  constructor() {
  }
}
