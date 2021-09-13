import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAge'
})
export class DateAgePipe implements PipeTransform {

  transform(birthday: Date): number {
     birthday=new Date(birthday);
    var month_diff = Date.now() - birthday.getTime();  
    var age_dt = new Date(month_diff);   
    //extract year from date      
    var year = age_dt.getUTCFullYear();  

    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
      
    //display the calculated age  
    return age; 
  }

}
