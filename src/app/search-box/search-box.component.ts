import { Component, OnInit, Output , EventEmitter , ElementRef} from '@angular/core';
import { SearchResult } from '../models/searchresult.model';
import { YouTubeSearchService } from '../services/YouTubeSearchService.service';

@Component({
  selector: 'app-search-box',
  template: `
   <input type="text" class="form-control" placeholder="Search" autofocus>
   `,
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtubeservice : YouTubeSearchService,
  private el : ElementRef) { }

  ngOnInit() {
  }

}
