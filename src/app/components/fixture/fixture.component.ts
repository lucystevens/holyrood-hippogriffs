import { Component, OnInit, Input } from '@angular/core';
import { Fixture } from 'src/app/domain/data-definitions';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  @Input() fixture: Fixture; 

  height = 75;

  constructor() { }

  ngOnInit() {
  }

  getTeamImage() : string {
    return "assets/images/teams/" + this.fixture.teamLogo;
  }

  isPast() : boolean {
    return this.fixture.date < new Date();
  }

}
