import { Component, OnInit } from '@angular/core';

const GOOGLE_API_KEY = "AIzaSyAWksDmaiODnU0QKg7dAxPvhqXz3Y6_1Fk";
const MAP_LOCATION = "Holyrood%20Hippogriffs";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getMapsUrl(): string  {
    return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=${MAP_LOCATION}`;
  }

}
