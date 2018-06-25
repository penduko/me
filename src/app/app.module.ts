import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTooltipModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, MainNavComponent, MainNavComponent,
    TestComponent
],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
