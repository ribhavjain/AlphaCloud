import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'taskFilter'
})
export class TaskFilter implements PipeTransform {
    transform(data: any, search?: Object): any {
        var empty = true;
        for (const [key, val] of Object.entries(search)) {
            if(val != null) { empty = false; break}
        }
        if(empty == true){
            return data;
        } else {
            // console.log(search);
            let filteredData = data;
            for (const [key, val] of Object.entries(search)) {
                if(val == null) continue;
                // console.log(val.toLocaleString(undefined, {month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" }).toLowerCase());
                if (!(val instanceof Date)){
                    filteredData = filteredData.filter(obj => obj[key].toString().toLowerCase().includes(val.toString().toLowerCase()));
                } else {
                    // console.log(val)
                    var end = new Date(val.getTime());
                        end.setMinutes(end.getMinutes() + 5); // 5 minutes after
                        end = new Date(end);
                        // console.log(end)
                    filteredData = filteredData.filter(obj => {
                        return (obj[key] >= val && obj[key] <= end)
                        // console.log(obj[key])
                        // obj[key].toLocaleString(undefined, {month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" }).toLowerCase().includes(val.toLocaleString(undefined, {month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" }).toLowerCase())
                        
                    });
                }
            }
            return filteredData;
        }
    }
}