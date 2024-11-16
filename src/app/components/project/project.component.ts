import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = [
    {
      name: 'Ferrite Product (Base Product)',
      description: 'Insurance workbench with data analytics for determining customer premiums. Features underwriter notes, document generation, JSON API response, and data visualization.',
      technologies: ['Angular', 'Java', 'Oracle SQL', 'Chart.js'],
      link: 'https://example.com/ferrite-product'
    },
    {
      name: 'Cab Fare Prediction',
      description: 'A predictive model using New York taxi fare data to estimate fares based on distance and time.',
      technologies: ['Python', 'Linear Regression', 'Random Forest Regression', 'Pandas', 'scikit-learn'],
      link: 'https://example.com/cab-fare-prediction'
    }
  ];
}
