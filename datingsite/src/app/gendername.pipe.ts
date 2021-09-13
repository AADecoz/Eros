import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gendername'
})
export class GendernamePipe implements PipeTransform {

  transform(short:string): string {
    switch(short){
      case "f":
        return "female";
        break;
      case "m":
        return "male";
        break;
      case "o":
        return "other";
        break;
      default:
        return "?";
    }
  }
  }


