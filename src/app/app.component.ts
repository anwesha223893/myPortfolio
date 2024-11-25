import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private translate: TranslateService){
      this.translate.setDefaultLang('english');
    this.translate.use('english');
  }
  contact(): void {
    alert('Feel free to contact me at: your.email@example.com');
  }
  switchLanguage(lang: string) {
    const languageMap: any = {
      english: 'english',
      hindi: 'hindi',
      bengali: 'bengali',
    };
  
    const langKey = languageMap[lang.toLowerCase()];
    if (langKey) {
      console.log(`Switching to language: ${langKey}`); // Log language change
      this.translate.use(langKey);
    } else {
      console.error(`Language '${lang}' is not supported.`);
    }
  }
  
  
}
