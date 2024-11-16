import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  programmingLanguages = ['Java', 'TypeScript', 'JavaScript', 'Python (Basics)'];
  frontendTechnologies = ['Angular', 'HTML', 'CSS', 'RxJS', 'Bootstrap'];
  backendTechnologies = ['Spring Boot', 'Oracle SQL'];
  tools = ['Git', 'Thymeleaf', 'Chart.js', 'scikit-learn'];

 
}
