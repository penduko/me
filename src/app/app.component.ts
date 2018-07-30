import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my profile';

  @HostBinding('class') componentCssClass;

  themes = [
    {value: 'black-theme', label: 'Dark'},
    {value: 'default-theme', label: 'Blue'},
    {value: 'light-theme', label: 'Light'},
    {value: 'nature-theme', label: 'Nature'}
  ];

  DEFAULT_THEME = 'black-theme';

  constructor(private overlayContainter: OverlayContainer) {

    // set default for overlay component
    this.overlayContainter.getContainerElement().classList.add(this.DEFAULT_THEME);
  }

  ngOnInit() {

    // set default theme
    this.componentCssClass = this.DEFAULT_THEME;
  }

  changeTheme(theme: string) {

    // set our template theme
    this.componentCssClass = theme;

    // remove first the current theme in our overlay components
    // before changing the for the new theme
    const classList = this.overlayContainter.getContainerElement().classList;
    const toRemove = Array.from(classList).filter((item: string) =>
      item.includes('-theme')
    );
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    classList.add(theme);
  }
}
