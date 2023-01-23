import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _url: string;

  constructor(private _httpClient: HttpClient) {
    this._url = environment.urlBackend + '/api/character';
  }
  /**
   * getCharacter
   */
  getCharacter(): Observable<any[]> {
    return this._httpClient.get<any[]>(this._url).pipe(
      tap((characters: any[]) => {
        return characters;
      })
    );
  }
}
