import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'My Portfolio';
  aboutMe: string = 'I am a passionate web developer with skills in Angular and more.';
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js'];
  projects: any[] = [
    { name: 'Project One', description: 'A cool project I built using Angular.' },
    { name: 'Project Two', description: 'Another project showcasing my skills.' }
  ];

  contact(): void {
    alert('Feel free to contact me at: your.email@example.com');
  }
}
