import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-space-maker',
  templateUrl: './space-maker.component.html',
  styleUrls: ['./space-maker.component.css']
})
export class SpaceMakerComponent implements OnInit {
@Input() leftPosition
@Input() topPosition

  constructor() { }

  ngOnInit() {
  }

}
