import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = [
    {
      name: 'Portfolio Website',
      description: `A personal portfolio website showcasing my skills, projects, and experience, built with Angular. 
      The project includes responsive design, interactive UI elements, and a modular architecture.`,
      technologies: ['Angular', 'HTML', 'CSS', 'TypeScript', 'Bootstrap'],
      link: 'https://github.com/anwesha223893/myPortfolio'
    },
    {
      name: 'Cab Fare Prediction',
      description: 'A predictive model using New York taxi fare data to estimate fares based on distance and time.',
      technologies: ['Python', 'Linear Regression', 'Random Forest Regression', 'Pandas', 'scikit-learn'],
      link: 'https://example.com/cab-fare-prediction'
    }
  ];
}
