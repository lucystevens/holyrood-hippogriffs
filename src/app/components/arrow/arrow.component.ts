import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {

  @Input() scrollId: string;
  @Input() colour = "black";

  constructor() { }

  ngOnInit() {
  }

  scroll(): void {
    const element = document.querySelector("#" + this.scrollId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
