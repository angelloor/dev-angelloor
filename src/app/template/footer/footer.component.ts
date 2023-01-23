import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public darkmode: boolean = false;

  constructor(private readonly _themeServiceService: ThemeServiceService) {}
  /**
   * Getter for current year
   */
  get currentYear(): number {
    return new Date().getFullYear();
  }

  ngOnInit(): void {
    this._themeServiceService.darkmode$
      .pipe()
      .subscribe((_darkmode: boolean) => {
        this.darkmode = _darkmode;
      });
  }
}
