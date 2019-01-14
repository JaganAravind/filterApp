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

    public colors: any[] = [{
        to: 25,
        color: '#0058e9'
    }, {
        from: 25,
        to: 50,
        color: '#37b400'
    }, {
        from: 50,
        to: 75,
        color: '#ffc000'
    }, {
        from: 75,
        color: '#f31700'
    }];
  public showLabels = true;
    public showTicks = true;
    public reverse = false;

    public startAngle = 0;
    public endAngle = 180;
    public rangeSize: number;

    public rangeLineCap = 'round';

    public rangePlaceholderColor = '#e6e5e5';
    public ticksColor = '#008000';
    public labelsColor = '#0000ff';

}
