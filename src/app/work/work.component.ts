import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  jobs: any[];
  skills: any[];

  constructor() { }

  ngOnInit() {
    this.jobs = [
      {
        organization: "Exponential",
        location: "Noida",
        joiningYear: 2016,
        leavingYear: "present",
        designation: "Senior Software Engineer",
        logo: "exponential.jpg"
      }, {
        organization: "ServiceNow",
        location: "Hyderabad",
        joiningYear: 2014,
        leavingYear: 2016,
        designation: "Applications Developer",
        logo: "servicenow.png"
      }, {
        organization: "Oracle",
        location: "Hyderabad",
        joiningYear: 2012,
        leavingYear: 2014,
        designation: "Applications Engineer",
        logo: "oracle.png"
      }
    ];

    this.skills = [{
      id: "javascript",
      name: "Javascript",
      color: "#f0db4f"
    }, {
      id: "angularjs",
      name: "AngularJS",
      color: "#c4473a"
    }, {
      id: "html5",
      name: "HTML5",
      color: "#e54d26"
    }, {
      id: "css3",
      name: "CSS3",
      color: "#3d8fc6"
    },{
      id: "bootstrap",
      name: "Bootstrap",
      color: "#59407f"
    }, {
      id: "nodejs",
      name: "NodeJS",
      color: "#83CD29"
    }, {
      id: "java",
      name: "Java",
      color: "#EA2D2E"
    }, {
      id: "jquery",
      name: "JQuery",
      color: "#0769ad"
    }, {
      id: "bower",
      name: "Bower",
      color: "#ef5734"
    }, {
      id: "grunt",
      name: "Grunt",
      color: "#fcaa1a"
    }, {
      id: "d3js",
      name: "D3JS",
      color: "#f7974e"
    }, {
      id: "typescript",
      name: "Typescript",
      color: "#007acc"
    }, {
      id: "ionic",
      name: "Ionic",
      color: "#4e8ef7",
      class: "devicon-ionic-original"
    }, {
      id: "npm",
      name: "NPM",
      color: "#cb3837",
      class: "devicon-npm-original-wordmark"
    }, {
      id: "mongodb",
      name: "MongoDB",
      color: "#4FAA41"
    }, {
      id: "nginx",
      name: "Nginx",
      color: "#090"
    }, {
      id: "sass",
      name: "Sass",
      color: "#cc6699"
    }];
  }

}
