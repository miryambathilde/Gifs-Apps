import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'pkvDYJ4yws0SDc8yuSEFQ4YTm5LjprOw';
  private _history: string[] = [];

  public results: any[] = [];

  constructor (private http: HttpClient) { }

  getHistory () {
    return [ ...this._history ];
  }

  searchGifs (query: string = '') {

    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
    }

    // https://api.giphy.com/v1/gifs/search?api_key=pkvDYJ4yws0SDc8yuSEFQ4YTm5LjprOw&q=dragon ball z&limit=10

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10}`)
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.results = resp.data;
      });
  }
}
