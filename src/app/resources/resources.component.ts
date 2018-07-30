import { Component, OnInit } from '@angular/core';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  versions = env.versions;
  constructor() { }

  ngOnInit() {
  }

}
