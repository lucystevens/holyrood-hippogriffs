import { Injectable } from '@angular/core';
import { Player } from '../domain/data-definitions';
import { PLAYERS } from '../domain/players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayers(): Player[] {
    return PLAYERS.sort((p1, p2) => p1.name > p2.name? 1 : -1);
  }
}
