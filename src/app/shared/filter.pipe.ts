import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterBy"
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], term: string): any[] {
    return value.filter((x: any) => {
      //console.log(x.project_type);
      if (x.project_type.toLowerCase().startsWith(term.toLowerCase())) x;
    });
  }
}
