import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  blue,
  dark,
  defaultTheme,
  green,
  light,
  Theme,
  yellow,
} from '../interfaces/ThemeInterface';
@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  private active!: Theme;

  initialDarkMode: boolean = true;

  private _darkmode: BehaviorSubject<boolean> = new BehaviorSubject(
    this.initialDarkMode
  );
  /**
   * Getter
   */
  get darkmode$(): Observable<boolean> {
    return this._darkmode.asObservable();
  }

  constructor() {}

  setDefaultTheme() {
    this._darkmode.next(false);
    this.setActiveTheme(defaultTheme);
  }

  setYellow() {
    this.setActiveTheme(yellow);
  }

  setBlue() {
    this.setActiveTheme(blue);
  }

  setGreen() {
    this.setActiveTheme(green);
  }

  setDarkTheme(): void {
    this._darkmode.next(true);
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this._darkmode.next(false);
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
