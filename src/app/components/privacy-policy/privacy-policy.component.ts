import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  contactEmail: string;

  constructor(private config : ConfigService) { }

  ngOnInit() {
    this.contactEmail = this.config.getContactEmail();
  }

  smoothScroll(elementID: string){
    const element = document.querySelector(elementID);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
