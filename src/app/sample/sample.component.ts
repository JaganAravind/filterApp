import { Component, OnInit } from "@angular/core";
import { exampleProduct } from '../product';
@Component({
  selector: "app-sample",
  templateUrl: "./sample.component.html",
  styleUrls: ["./sample.component.scss"]
})
export class SampleComponent implements OnInit {
  visibleSidebar2;
  rangeDates: Date[];
  constructor() {}

  ngOnInit() {
  }
  
  onSubmit(f) {
    console.log(f);
  }
}
