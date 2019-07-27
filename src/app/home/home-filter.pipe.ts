import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'homeFilter'
})
export class HomeFilterPipe implements PipeTransform {

    transform(value: any, planID:any, programName:any, planType: any, lastUpdated:any, lastUpdatedBy: any): any { 
    if (!value) {
      return value;
    } else {
      return value.filter(item => {
        return item.plan_id.toLowerCase().includes(planID.toLowerCase()) && item.programName.toLowerCase().includes(programName.toLowerCase()) && item.planType.toLowerCase().includes(planType.toLowerCase())
        && item.lastUpdatedBy.toLowerCase().includes(lastUpdatedBy.toLowerCase()) && item.lastUpdated.toLowerCase().includes(lastUpdated.toLowerCase());
      });  
    }
    }
}
