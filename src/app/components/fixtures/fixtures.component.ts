import { Component, OnInit } from '@angular/core';
import { Fixture } from 'src/app/domain/data-definitions';
import { FixtureService } from 'src/app/services/fixture.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  private loadStep = 3;

  pastLoaded = this.loadStep;
  futureLoaded = this.loadStep;

  pastFixtures: Fixture[];
  upcomingFixtures: Fixture[];

  constructor(private fixtureService: FixtureService) { }

  ngOnInit() {
    this.pastFixtures = this.fixtureService.getPastFixtures();
    this.upcomingFixtures = this.fixtureService.getUpcomingFixtures();
  }

  loadMorePast(){
    this.pastLoaded += this.loadStep;
  }

  loadMoreFuture(){
    this.futureLoaded += this.loadStep;
  }

}
