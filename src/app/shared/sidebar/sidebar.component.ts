import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { Gif } from 'src/app/gifs/interfaces/gifs.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.scss' ]
})
export class SidebarComponent implements OnInit {

  constructor (private gifsService: GifsService) { }

  ngOnInit (): void { }

  get history () {
    return this.gifsService.getHistory();
  }

  searchGif (item: string) {
    console.log(item);
    this.gifsService.searchGifs(item);
  }

}
