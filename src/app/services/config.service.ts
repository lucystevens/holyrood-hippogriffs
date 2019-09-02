import { Injectable } from '@angular/core';
import { CONFIG } from '../domain/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  /**
   * Gets the configured contact email to
   * use for the website.
   */
  getContactEmail(): string {
    return CONFIG.contactEmail;
  }
}
