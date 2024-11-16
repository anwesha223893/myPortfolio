import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  
import { AppComponent } from './app.component'; 
import { appRoutes } from './app.routes'; 
import { HomeComponent } from './components/home/home.component';  
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';
import { AccomplishmentsComponent } from './components/accomplishments/accomplishments.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SkillsComponent,
    ProjectComponent,
    AccomplishmentsComponent  // Declare the main component
    // Add other components here if needed
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),  // Configure the router with appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent ],  // Bootstrap the main component
})
export class AppModule {}
