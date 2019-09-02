import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/domain/data-definitions';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  @Input() player: Player;

  constructor() { }

  ngOnInit() {
  }

  getPhoto(): string {
    return this.player.photo.startsWith("http")? this.player.photo : "assets/profiles/" + this.player.photo;
  }

}
