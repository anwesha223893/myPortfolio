// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Import the AppComponent
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AccomplishmentsComponent } from './components/accomplishments/accomplishments.component';
// Import other components if needed for routing

export const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'projects', component: ProjectComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'home', redirectTo: '/HomeComponent', pathMatch: 'full' },
  { path: 'accomplishment', component: AccomplishmentsComponent },

];
