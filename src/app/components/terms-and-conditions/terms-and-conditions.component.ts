import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {

  contactEmail: string;

  constructor(private config : ConfigService) { }

  ngOnInit() {
    this.contactEmail = this.config.getContactEmail();
  }

}
