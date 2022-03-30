import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  languages = ['es', 'en', 'it'];

  constructor(private translate: TranslateService) {
    translate.addLangs(this.languages);
    translate.setDefaultLang('es');
  }
}
