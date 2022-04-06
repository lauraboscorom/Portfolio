import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
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

  // HTML Element for header
  @ViewChild('header') header: ElementRef;

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

  /**
   * Adds or removes the background property so it comes transparent again (defined in your css)
   * @param event window scroll event
   */
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if(window.pageYOffset > 50) {
      this.header.nativeElement.classList.add('active');
    } else {
      this.header.nativeElement.classList.remove('active');
    }
  }

}
