import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logFilter'
})
export class LogFilterPipe implements PipeTransform {

  transform(value: any, id:any, username: any, timestamp:any, event: any): any {
    if (!value) {
      return value;
    }
    return value.filter(item => {
      value.timestamp = value.timestamp 
      return item._id.includes(id) && item.username.toLowerCase().includes(username.toLowerCase())
      && item.userEvent.toLowerCase().includes(event.toLowerCase()) && item.timestamp.toString().toLowerCase().includes(timestamp.toString().toLowerCase());
    });
  }
}