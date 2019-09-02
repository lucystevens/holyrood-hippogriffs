import { Injectable } from '@angular/core';
import { Fixture } from '../domain/data-definitions';
import { FIXTURES } from '../domain/fixtures';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor() { }

  /**
   * Gets all fixtures from the past
   */
  getPastFixtures(): Fixture[] {
    return FIXTURES.filter(fixture => fixture.date <= new Date()).sort(this.sortNewestFirst);
  }

  /**
   * Gets all fixtures in the future
   */
  getUpcomingFixtures(): Fixture[] {
    return FIXTURES.filter(fixture => fixture.date > new Date()).sort(this.sortOldestFirst);
  }

  /**
   * Function for sorting fixtures by newest first (for past fixtures)
   * @param f1 The first fixture to compare
   * @param f2 The second fixture to compare
   */
  private sortNewestFirst(f1: Fixture, f2: Fixture): number {
    return f2.date.getTime() - f1.date.getTime();
  }

  /**
   * Function for sorting fixtures by oldest first (or closest to current date for future fixtures)
   * @param f1 The first fixture to compare
   * @param f2 The second fixture to compare
   */
  private sortOldestFirst(f1: Fixture, f2: Fixture): number {
    return f1.date.getTime() - f2.date.getTime();
  }
}
