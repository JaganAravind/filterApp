import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MultiSelectModule } from '@progress/kendo-angular-dropdowns';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';
import { GaugesComponent } from './gauges/gauges.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { HeaderComponent } from './header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GaugesComponent,
    TreeViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    TreeViewModule,
    InputsModule,
    GridModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    GaugesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
