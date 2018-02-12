import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.scss']
})
export class ExperimentsComponent implements OnInit {

  experiments: any;

  constructor() { }

  ngOnInit() {
    this.experiments = [];
  }

}
