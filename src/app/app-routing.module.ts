import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { GaugesComponent } from './gauges/gauges.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'grid', component: GridComponent },
  { path: 'gauges', component: GaugesComponent },
  { path: 'tree-view', component: TreeViewComponent },
  { path: 'sidebar', component: SampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
