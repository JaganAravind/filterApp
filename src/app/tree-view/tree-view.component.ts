import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public data: any[] = [
    {
        text: 'Furniture', items: [
            { text: 'Tables & Chairs', items: [
                  { text: 'Coffee tables' },
                  { text: 'Poufs' }
              ]
            },
            { text: 'Sofas' },
            { text: 'Occasional Furniture' }
        ]
    },
    {
        text: 'Decor', items: [
            { text: 'Bed Linen' },
            { text: 'Curtains & Blinds' },
            { text: 'Carpets' }
        ]
    }
];

public parsedData: any[] = this.data;
public searchTerm = '';

public onkeyup(value: string): void {
  this.parsedData = this.search(this.data, value);
}

public search(items: any[], term: string): any[] {
  return items.reduce((acc, item) => {
        if (this.contains(item.text, term)) {
          acc.push(item);
        } else if (item.items && item.items.length > 0) {
          const newItems = this.search(item.items, term);

          if (newItems.length > 0) {
                acc.push({ text: item.text, items: newItems });
          }
      }

        return acc;
    },                []);
}

public contains(text: string, term: string): boolean {
  return text.toLowerCase().indexOf(term.toLowerCase()) >= 0;
}

/**
 * A function that returns an observable instance which contains the
 * [child nodes](https://www.telerik.com/kendo-angular-ui/components/treeview/api/TreeViewComponent/#toc-children)
 * for a given parent node.
 */
public children = (dataitem: any): Observable<any> => of(dataitem.items);

/**
 * A function that determines whether a given node
 * [has children](https://www.telerik.com/kendo-angular-ui/components/treeview/api/TreeViewComponent/#toc-haschildren).
 */
public hasChildren = (dataitem: any): boolean => !!dataitem.items;

}
