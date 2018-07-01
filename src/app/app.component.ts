import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my profile';
  fillerContent = Array(50)
    .fill(0)
    .map(() =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    );

  @HostBinding('class') componentCssClass;

  themes = [
    {value: 'black-theme', label: 'Dark'},
    {value: 'default-theme', label: 'Blue'},
    {value: 'light-theme', label: 'Light'},
    {value: 'nature-theme', label: 'Nature'}
  ];

  DEFAULT_THEME = 'default-theme';

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
