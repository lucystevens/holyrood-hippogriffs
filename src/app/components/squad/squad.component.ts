import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/domain/data-definitions';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {

  players: Player[];
  search = "";
  position = "";

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  selectPosition(position: string){
    if(this.position == position){
      this.position = "";
    }
    else{
      this.position = position;
    }
  }

  getFilteredPlayers() : Player[] {
    return this.players.filter(p => this.filter(p, this));
  }

  filter(player: Player, ctx: SquadComponent) : boolean {
    let nameFilter = ctx.search == "" || player.name.toLocaleLowerCase().includes(ctx.search)
    let positionFilter = ctx.position == "" || player.positions.includes(ctx.position);
    return nameFilter && positionFilter;
  }

}
