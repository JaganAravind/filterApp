import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterByStatus"
})
export class FilterByStatusPipe implements PipeTransform {
  transform(items: any[], term: string): any[] {
    console.log("pipe data->", items);
    return items.filter((x: any) =>
      x.status.toLowerCase().startsWith(term.toLowerCase())
    );
  }
}
