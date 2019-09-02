import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {

  transform(value: Date): string {
    let now = new Date();
    let years = now.getFullYear() - value.getFullYear();
    let months = now.getMonth() - value.getMonth();

    if(months < 0){
      years--;
      months += 12;
    }
    if(years > 0){
      return years + " years, " + months + " months";
    }
    else {
      return months + " months";
    }
  }

}
