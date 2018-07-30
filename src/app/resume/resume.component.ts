import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  // mgl timeline property
  timelineAlternate = true;
  timelineSize = 30;

  constructor() { }

  ngOnInit() {
  }

}
