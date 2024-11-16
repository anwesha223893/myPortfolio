import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name = 'Anwesha Bandyopadhyay';
  title = 'Full-Stack Developer | Product Engineer';
  bio = 'I am a passionate software developer with experience in building responsive applications using Angular, Java, and Oracle SQL. Skilled in creating efficient, user-centric solutions and a collaborative team player.';
  contactEmail = 'anwesha223893@gmail.com';

  // Links to profiles
  linkedinUrl = 'https://www.linkedin.com/in/anweshabandyopadhyay/';
  githubUrl = 'https://github.com/anwesha223893';
}
