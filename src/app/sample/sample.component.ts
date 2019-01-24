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
  private pType = null;
  private pStatus = null;
  private pDate = null;
  applyFilters(param) {
    // this.onChangeProjectDetails();
    const that = this;
    // let flag = false;
    let arr = [];
    that.projectDetails = exampleProduct.filter(item => {
      arr = [];
      if (that.pType !== null && that.pType.length > 0) {
        if (that.pType.indexOf(item.project_type) > -1) {
          arr.push("true");
        } else {
          arr.push("false");
        }
      }

      if (that.pStatus !== null) {
        if (that.pStatus === item.status) {
          arr.push("true");
        } else {
          arr.push("false");
        }
      }
      if (that.pDate !== null) {
        var frmDate = new Date(that.pDate[0]),
          toDate = new Date(that.pDate[1]),
          actualDate = new Date(item["created_date"]);
        if (actualDate >= frmDate && actualDate <= toDate) {
          arr.push("true");
        } else {
          arr.push("false");
        }
      }
      console.log('array', arr.indexOf("false") > -1);
      return !(arr.indexOf("false") > -1);
    });
  }
  pageInit() {
    this.projectDetails = exampleProduct;
    this.pType = null;
    this.pStatus = null;
    this.pDate = null;
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
    // this.filter.created_date = arrData;
    this.pDate = arrData;
    // this.onChangeProjectDetails();
  }

  onChangeProjectType(type) {
    // console.log("type", type);
    this.pType = type;
    // this.filter.project_type = type; // example: residential
    // this.onChangeProjectDetails();
  }

  onChangeStatus(val) {
    this.pStatus = val;
    //this.filter.status = val;
    // console.log("filter data-->", this.filter.status);
    //this.onChangeProjectDetails();
  }

  onChangeProjectDetails() {
    this.pageInit();
    var filterJSON = this.filter;
    // console.log("filterJSON", filterJSON);
    var arrProjectTypeData = [];
    this.projectDetails = this.projectDetails.filter(function(item) {
      console.log("item", item);
      // for (var key in filterJSON) {
      //   console.log("key in filterJSON", key);
      // if (key == "project_type") {
      //   filterJSON[key].forEach(element => {
      //     // console.log('filterJSON[key]',filterJSON[key]);
      //     // console.log("item key->", item[key]);
      //     if (element != item[key]) return false;
      //     // console.log('item data', item);
      //     // console.log('arrData', arrProjectTypeData.push(item));
      //     arrProjectTypeData.push(item);
      //     return true;
      //   });
      // } else if (key == "created_date") {
      //   if (filterJSON[key][1] === undefined) return true;
      //   var frmDate = new Date(filterJSON[key][0]),
      //     toDate = new Date(filterJSON[key][1]),
      //     actualDate = new Date(item[key]);
      //   if (actualDate >= frmDate && actualDate <= toDate) {
      //     return true;
      //   } else return false;
      // } else if (
      //   (key == "status" && item[key] === undefined) ||
      //   item[key] != filterJSON[key]
      // )
      //     return false;
      // }
      return true;
    });
    if (arrProjectTypeData.length > 0) this.projectDetails = arrProjectTypeData;
    console.log("arrayData>>>>>", arrProjectTypeData);
  }

  // onSubmit(f) {
  //   console.log(f);
  // }
}
