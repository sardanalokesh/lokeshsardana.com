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
    }];
  }

  private showInModal(description: string, path: string, height: number) {
    this.selectedExperiment.description = description,
    this.selectedExperiment.path = path;
    this.selectedExperiment.height = height;
    $("#displayModal").modal("show");
  }

}
