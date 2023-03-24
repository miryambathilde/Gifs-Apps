import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'pkvDYJ4yws0SDc8yuSEFQ4YTm5LjprOw';
  private _history: string[] = [];

  public results: Gif[] = [];

  constructor (private http: HttpClient) {

    this._history = JSON.parse(localStorage.getItem('history') || '[]');
    this.results = JSON.parse(localStorage.getItem('results') || '[]');
  }

  getHistory () {
    return [ ...this._history ];
  }

  searchGifs (query: string = '') {

    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    // https://api.giphy.com/v1/gifs/search?api_key=pkvDYJ4yws0SDc8yuSEFQ4YTm5LjprOw&q=dragon ball z&limit=10

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10}`)
      .subscribe((resp) => {
        console.log(resp.data);
        this.results = resp.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
}
