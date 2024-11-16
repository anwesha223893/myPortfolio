import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isOpen = true;
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
  navItems = [
    { label: 'Home', route: '' },
    { label: 'Skills', route: 'skills' },
    { label: 'Projects', route: 'projects' },
    { label: 'Accomplishment', route: 'accomplishment' },
    // { label: 'Experience', route: 'experience' },
    // { label: 'Education', route: 'education' },
    // { label: 'Contact', route: 'contact' }
  ];
}
