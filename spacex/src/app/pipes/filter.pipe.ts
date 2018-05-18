import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], compareWith: any, attributeToCompareWith: string): any {
    if (items) {
        return items && items.filter(item => item[attributeToCompareWith].toLowerCase().indexOf(compareWith.toLowerCase()) !== -1);
    }
  }
}
