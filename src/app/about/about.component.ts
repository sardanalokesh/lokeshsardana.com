import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  experience: string;

  private jobStarted: string = "2012-06-18";

  constructor() { }

  ngOnInit() {
    let experienceInYears = moment().diff(this.jobStarted, "years");
    let experienceInMonths = moment().diff(this.jobStarted, "months");
    this.experience = experienceInYears + " years and " + experienceInMonths%12 + " months";
    console.log(this.experience);
  }

}
