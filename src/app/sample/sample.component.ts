import { Component, OnInit, OnChanges } from "@angular/core";
import { exampleProduct } from "../product";

@Component({
  selector: "app-sample",
  templateUrl: "./sample.component.html",
  styleUrls: ["./sample.component.scss"]
})
export class SampleComponent implements OnInit {
  visibleSidebar2;
  rangeDates: any;
  projectDetails: any[];
  projectType: string = "";
  filter: any = {};

  constructor() {}

  ngOnInit() {
    this.pageInit();
  }

  pageInit() {
    this.projectDetails = exampleProduct;
  }

  onChangeDateRange($event) {
    this.filter.created_date = [];
    var arrData = [];
    if ($event.length > 0) {
      $event.forEach(element => {
        if (element != null) {
          arrData.push(element.toLocaleDateString());
        }
      });
    }
    this.filter.created_date = arrData;
    this.onChangeProjectDetails();
  }

  onChangeProjectType(type) {
    console.log("type", type);
    this.filter.project_type = type; // residential
    this.onChangeProjectDetails();
  }

  onChangeStatus(val) {
    this.filter.status = val;
    this.onChangeProjectDetails();
  }

  onChangeProjectDetails() {
    this.pageInit();
    var filterJSON = this.filter;
    var arrProjectTypeData = [];
    this.projectDetails = this.projectDetails.filter(function(item) {
      for (var key in filterJSON) {
        if (key == "project_type") {
          filterJSON[key].forEach(element => {
            if (element != item[key]) return false;

            arrProjectTypeData.push(item);
            return true;
          });
        } else if (key == "created_date") {
          if (filterJSON[key][1] === undefined) return true;
          var frmDate = new Date(filterJSON[key][0]),
            toDate = new Date(filterJSON[key][1]),
            actualDate = new Date(item[key]);

          if (actualDate >= frmDate && actualDate <= toDate) {
            return true;
          } else return false;
        } else if (
          (key == "status" && item[key] === undefined) ||
          item[key] != filterJSON[key]
        )
          return false;
      }
      return true;
    });
    if (arrProjectTypeData.length > 0) this.projectDetails = arrProjectTypeData;
  }

  onSubmit(f) {
    console.log(f);
  }
}
