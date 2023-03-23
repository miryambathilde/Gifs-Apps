import { Component, OnInit } from '@angular/core';
import { GifsService } from './../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: [ './results.component.scss' ]
})
export class ResultsComponent implements OnInit {

  constructor (private gifsService: GifsService) { }

  ngOnInit (): void {
  }

  get results () {
    return this.gifsService.results;
  }

}
