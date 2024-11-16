import { Component } from '@angular/core';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrl: './accomplishments.component.css'
})
export class AccomplishmentsComponent {
 // Courses and Certifications
 courses = [
  { name: 'Programming for Everybody (Getting Started with Python)', provider: 'Coursera' }
];
certifications = [
  { name: 'SQL (Hackerrank)', url: 'https://www.hackerrank.com/certificates/38af34bdd860' },
  { name: 'Angular (Basic)', url: 'https://www.hackerrank.com/certificates/b91e53abb00e' },
  { name: 'Java (Hackerrank)', url: 'https://www.hackerrank.com/certificates/2688f6dfd9ff' },
  { name: 'Python (Hackerrank)', url: 'https://www.hackerrank.com/certificates/64568b7a9930' }
];

// Achievements
achievements = [
  'Received Spot Award for creating a report generator',
  'Secured second place in a company-wide hackathon, showcasing collaborative problem-solving and innovation'
];
}
