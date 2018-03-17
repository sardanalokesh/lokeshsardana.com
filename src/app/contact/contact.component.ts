import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mediums: any;

  constructor() { }

  ngOnInit() {
    this.mediums = [{
      id: "email",
      url: "mailto:sardanalokesh@gmail.com",
      class: "fa fa-envelope email"
    }, {
      id: "linkedin",
      url: "https://linkedin.com/in/sardanalokesh"
    }, /*{
      id: "facebook",
      url: "https://facebook.com/sardanalokesh"
    },*/ {
      id: "twitter",
      url: "https://twitter.com/sardanalokesh"
    }, {
      id: "github",
      url: "https://github.com/sardanalokesh"
    }];
  }

}
