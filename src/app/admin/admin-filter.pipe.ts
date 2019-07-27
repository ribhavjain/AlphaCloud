import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminFilter'
})
export class AdminFilterPipe implements PipeTransform {

  transform(value: any, adminUsername:any): any {
    if(!value) {
      return value;
    }
    return value.filter(item => {
      return item.adminUsername.toLowerCase().includes(adminUsername.toLowerCase());
    })
  }
}
