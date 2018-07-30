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
  MatCardModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { MainContentComponent } from './main-content/main-content.component';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ContactComponent } from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Add an icon to the library for convenient access in other components
library.add(fas, fab);

@NgModule({
   declarations: [
      AppComponent,
      MainContentComponent,
      ResumeComponent,
      ContactComponent,
      ResourcesComponent,
      BlogsComponent
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
      MatCardModule,
      MatMenuModule,
      MatSlideToggleModule,
      MatStepperModule,
      MatChipsModule,
      MatFormFieldModule,
      MatInputModule,
      MatGridListModule,
      FontAwesomeModule,
      MglTimelineModule,
      RouterModule.forRoot(appRoutes, { enableTracing: false}),
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
