import {Component, OnInit, ChangeDetectorRef, NgZone} from '@angular/core';

declare var $;

@Component({
  selector: 'experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.scss']
})
export class ExperimentsComponent implements OnInit {

  experiments: any;
  selectedExperiment: any = {
    description: "",
    path: "",
    height: 0
  };

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.experiments = [{
      image: "assets/images/motionChart.png",
      description: "Motion Chart",
      click: () => {
        this.showInModal("Motion Chart", "experiments/motionChart", 450);
      },
      tags: ["D3JS"],
      github: "https://github.com/sardanalokesh/motionchart"
    }, {
      image: "assets/images/scrumCards.png",
      description: "Scrum Poker Cards",
      click: () => {
        window.open("https://play.google.com/store/apps/details?id=com.tekchup.scrumcards", "_blank");
      },
      tags: ["Ionic", "AngularJS","Android"]
    }, {
      image: "assets/images/githubNinja.png",
      description: "Github Projects Explorer",
      click: () => {
        window.open("https://play.google.com/store/apps/details?id=com.tekchup.ninjagithub", "_blank");
      },
      tags: ["Ionic", "AngularJS","Android"],
      github: "https://github.com/sardanalokesh/GithubNinja"
    }, {
      image: "assets/images/fb-map.png",
      description: "Travel History",
      click: () => {
        window.open("http://fb-geography.herokuapp.com/login.html", "_blank");
      },
      tags: ["JS", "Google Maps", "FB Graph API"]
    }, {
      image: "assets/images/inventory-visualization.png",
      description: "Inventory Visualization",
      click: () => {
        this.showInModal("Inventory Visualization", "experiments/inventory-visualization", 450);
      },
      tags: ["D3JS"],
      github: "https://github.com/sardanalokesh/daywiseTopicVisualization"
    }];
  }

  githubClickHandler(event) {
    event.stopPropagation();
  }

  private showInModal(description: string, path: string, height: number) {
    this.selectedExperiment.description = description,
    this.selectedExperiment.path = path;
    this.selectedExperiment.height = height;
    $("#displayModal").modal("show");
  }

}
