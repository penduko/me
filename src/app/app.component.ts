import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my profile';
  constructor(overLayContainer: OverlayContainer) {
    // overLayContainer.getContainerElement().classList.add('indigo-pink');
  }
}
