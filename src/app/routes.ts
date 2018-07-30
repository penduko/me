import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ContactComponent } from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';
import { BlogsComponent } from './blogs/blogs.component';

export const appRoutes: Routes = [
    { path: 'me', component: MainContentComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: '', redirectTo: '/me', pathMatch: 'full' },
    { path: '**', redirectTo: '/me', pathMatch: 'full' }
];
