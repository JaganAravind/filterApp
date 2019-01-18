import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterBy"
  /**
   *  [{id:1, name: 'test'}]
   *
   */
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], term: string): any[] {
    return value.filter((x: any) => 
      x.name.toLowerCase().startsWith(term.toLowerCase())
    );
  }
}
