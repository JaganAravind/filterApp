import { Component, OnInit } from '@angular/core';
import { filterBy, FilterDescriptor, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { sampleProducts } from './products';
import { FilterService } from '@progress/kendo-angular-grid';

const flatten = filter => {
  const filters = (filter || {}).filters;
  if (filters) {
      return filters.reduce((acc, curr) => acc.concat(curr.filters ? flatten(curr) : [curr]), []);
  }
  return [];
};

const distinctCategories = data => data
  .map(x => x.Category)
  .filter((x, idx, xs) => xs.findIndex(y => y.CategoryName === x.CategoryName) === idx);

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public filter: CompositeFilterDescriptor;
    public gridData: any[] = filterBy(sampleProducts, this.filter);
    public categories: any[] = distinctCategories(sampleProducts);

    private categoryFilter: any[] = [];

    public filterChange(filter: CompositeFilterDescriptor): void {
        this.filter = filter;
        this.gridData = filterBy(sampleProducts, filter);
    }

    public categoryChange(values: any[], filterService: FilterService): void {
        filterService.filter({
            filters: values.map(value => ({
                field: 'CategoryID',
                operator: 'eq',
                value
            })),
            logic: 'or'
        });
    }

    public categoryFilters(filter: CompositeFilterDescriptor): FilterDescriptor[] {
        this.categoryFilter.splice(
            0, this.categoryFilter.length,
            ...flatten(filter).map(({ value }) => value)
          );
        return this.categoryFilter;
    }

}
