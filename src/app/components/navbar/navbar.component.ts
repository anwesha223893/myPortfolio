import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() languageChanged = new EventEmitter<string>();

  constructor(private translate: TranslateService){
   }
  switchLanguage(lang: string) {
    this.languageChanged.emit(lang); // Emit the language selection
  }
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
