import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.scss']
})
export class GaugesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public value: number = 10;
  public showLabels = true;
    public showTicks = true;
    public reverse = false;

    public startAngle = -30;
    public endAngle = 210;
    public rangeSize: number;

    public rangeLineCap = 'round';

    public rangePlaceholderColor = '#80ff00';
    public ticksColor = '#008000';
    public labelsColor = '#0000ff';

}
