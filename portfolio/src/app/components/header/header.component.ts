import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Languages variables
  languages: string[];
  translateService: TranslateService;
  currentLang: string;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
  }

  ngOnInit(): void {
    // Languages variables assignments
    this.languages = this.translateService.getLangs();
    this.currentLang = this.translateService.getDefaultLang();
  }

  /**
   * Takes the given language and assigns it to the translate service as current language
   * @param language chosen language
   */
  useLanguage(language: string): void {
    this.translateService.use(language);
    this.currentLang = this.translateService.currentLang;
  }

}
